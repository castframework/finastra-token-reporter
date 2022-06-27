export enum Ledger {
  ETHEREUM = 'ETHEREUM',
  TEZOS = 'TEZOS',
}

export interface Bond {
  name: string;
  isinCode: string;
  currency?: string;
  issuer: string;
  maturityDate: string;
  interestRateInBips: number;
  ledger?: Ledger;
  contractAddress?: string;
}

export interface Holder {
  instrumentAddress: ETH_Address;
  ledger: Ledger;
  balance: number;
  legalEntityAddress: ETH_Address;
  symbol: string;
  valueInFiat: number;
  currency: Currency;
  percentage: number;
  unlocked: number;
  locked: number;
  rank?: number;
}

export type ETH_Address = string;
export type Currency = string;
