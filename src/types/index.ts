export interface Event {
  event: string;
  signature: string | null;
  address: string;
  returnValues: object;
  logIndex: number;
  transactionIndex: number;
  blockHash: string;
  blockNumber: number;
}

export interface TimeUnits {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface MintListenerOptions {
  onMint: () => void;
}

export interface ReopenListenerOptions {
  onReopen: () => void;
}