interface Tracker {
  readonly id: number;
  readonly clientUserUid: string;
  readonly createdAt: number;
  readonly trackerUuid: string;
  readonly distance?: number;
  readonly bluetoothAddress?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly rssi?: number;
}

export default Tracker;
