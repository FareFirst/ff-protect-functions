import * as functions from 'firebase-functions';

const runtimeOpts: functions.RuntimeOptions = {
  memory: '128MB',
};

const sync = functions.runWith(runtimeOpts)
  .https.onRequest(async (req, res) => {
    const syncService = (await import('../services/sync')).default;
    await syncService(req, res);
  });

export default sync;
