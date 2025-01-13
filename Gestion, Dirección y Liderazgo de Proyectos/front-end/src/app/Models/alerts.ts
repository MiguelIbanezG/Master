export interface Alert {
  key: string;
  params: Record<string, string | number | boolean>;
  timestamp: string;
}