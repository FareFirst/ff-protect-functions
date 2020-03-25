import functions from 'firebase-functions';

const getStage = (): string | undefined => functions.config().app
  && functions.config().app.stage;

export {
  // eslint-disable-next-line import/prefer-default-export
  getStage,
};
