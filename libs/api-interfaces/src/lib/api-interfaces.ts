export enum Ledger {
  ETHEREUM = "ETHEREUM",
  TEZOS = "TEZOS"
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
