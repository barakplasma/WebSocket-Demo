export interface IEventData {
  name: string;
  unit: string;
  logo: string;
  value: number;
  date: string;
  device: string;
}

export interface IEventReceiver {
  (event: IEventData): any;
}
