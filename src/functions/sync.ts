import * as functions from 'firebase-functions';

const sync = functions.https.onRequest(async (req, res) => {
  const importedSync = await import('../services/sync');

  const syncService = importedSync as unknown as (
    req: functions.Request,
    res: functions.Response,
  ) => void;

  syncService(req, res);
});

export default sync;
