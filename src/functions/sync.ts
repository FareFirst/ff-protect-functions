import * as functions from 'firebase-functions';
import { DEFAULT_GCP_REGION } from './constants';

const runtimeOpts: functions.RuntimeOptions = {
  memory: '128MB',
};

const sync = functions.runWith(runtimeOpts)
  .region(DEFAULT_GCP_REGION)
  .https.onRequest(async (req, res) => {
    const syncService = (await import('../services/sync')).default;
    await syncService(req, res);
  });

export default sync;
