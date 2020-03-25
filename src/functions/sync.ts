import * as functions from 'firebase-functions';

const sync = functions.https.onRequest(async (req, res) => {
  const syncService = (await import('../services/sync')).default;
  await syncService(req, res);
});

export default sync;
