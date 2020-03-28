import User from '../auth/user';
import SyncData from './types/sync-data';
import ValidationError from './errors/validation-error';

const processUserSync = async (user: User, syncData?: SyncData): Promise<void> => {
  if (!syncData) {
    throw new ValidationError('syncData can\'t null');
  }

  validateSyncData(syncData);
};

export default processUserSync;
