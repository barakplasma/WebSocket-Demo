export interface EventData {
  name: string;
  unit: string;
  logo: string;
  value: number;
  date: string;
  device: string;
}

export interface EventReceiver {
  (event: EventData): void;
}
