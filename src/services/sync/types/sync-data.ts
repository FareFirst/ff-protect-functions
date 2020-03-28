import Device from './device';
import Location from './location';
import Tracker from './tracker';

interface SyncData {
  readonly clientUserUid: string;
  readonly device: Device;
  readonly trackers: Array<Tracker>;
  readonly location?: Location;
}

export default SyncData;
