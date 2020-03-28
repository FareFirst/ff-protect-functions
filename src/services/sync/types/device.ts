import DeviceModelInfo from './device-model-info';

interface Device {
  readonly locale: string;
  readonly appVersionCode: string;
  readonly fcmToken?: string;
  readonly modelInfo?: DeviceModelInfo;
  readonly networkCountryCode?: string;
  readonly osVersionCode?: string;
  readonly platform?: string;
  readonly simCountryCode?: string;
}

export default Device;
