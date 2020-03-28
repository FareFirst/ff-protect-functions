import admin from '../admin';

class User {
  uid: string;

  constructor(user: admin.auth.DecodedIdToken) {
    this.uid = user.uid;
  }
}

export default User;
