import * as functions from 'firebase-functions';
import admin from '../admin';
import User from './user';

enum AuthCode {
  UNAUTHORIZED = 'auth/unauthorized',
  REVOKED = 'auth/id-token-revoked',
  INVALID_TOKEN = 'auth/id-token-invalid',
  USER_UNVERIFIED = 'auth/user-unverified',
}

class AuthError extends Error {
  code: AuthCode;

  constructor(aCode: AuthCode) {
    super('Unauthorized access. Please login.');
    this.code = aCode;
  }
}

const getIDToken = (req: functions.Request): string | undefined => {
  /*
  * We support authorization or x-auth-id-token header for accepting Bearer token.
  * This change was done to support new search rollback. Priority is given to
  * authorization header.
  */
  const token = req.headers.authorization || req.headers['x-auth-id-token'];

  if (!token) return undefined;

  let newToken: string;

  if (Array.isArray(token)) {
    [newToken] = token;
  } else {
    newToken = token;
  }

  if (!newToken || (newToken && !/^Bearer /.test(newToken))) return undefined;
  return newToken.substring(7);
};

const isIDTokenPresent = (idToken?: string): boolean => !!(idToken && idToken.trim().length);

const getCurrentUser = (
  req: functions.Request,
): Promise<User> => new Promise((resolve, reject) => {
  const idToken = getIDToken(req);
  if (!idToken || !isIDTokenPresent(idToken)) {
    reject(new AuthError(AuthCode.UNAUTHORIZED));
    return;
  }

  admin.auth().verifyIdToken(idToken).then((payload) => {
    const user = new User(payload);
    resolve(user);
  }).catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    const errorCode = error.code === 'auth/id-token-revoked' ? AuthCode.REVOKED : AuthCode.INVALID_TOKEN;
    reject(new AuthError(errorCode));
  });
});

export default getCurrentUser;

export {
  AuthCode,
  AuthError,
};
