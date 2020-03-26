import * as functions from 'firebase-functions';

const getConfig = (): functions.config.Config => functions.config();

const getStage = (): string | undefined => getConfig()?.app?.stage;

export {
  // eslint-disable-next-line import/prefer-default-export
  getStage,
};
