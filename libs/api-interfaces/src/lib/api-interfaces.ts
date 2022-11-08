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

export interface History {
  notificationName: ContractNotificationName;
  instrumentAddress: ETH_Address;
  transactionHash: string;
  lightSettlementTransactions: LightSettlementTransaction[];
  settlementTransactionOperationType: string;
}

export interface LightSettlementTransaction {
  id: string;
  participantAccountNumbers: SettlementTransactionParticipantAddresses;
}

export interface SettlementTransactionParticipantAddresses {
  securityDeliverer: string;
  securityReceiver: string;
  securityIssuer: string;
  settler: string;
  registrar: string;
}

export enum ContractNotificationName {
  SubscriptionInitiated = 'SubscriptionInitiated',
  TradeInitiated = 'TradeInitiated',
  RedemptionInitiated = 'RedemptionInitiated',
  PaymentReceived = 'PaymentReceived',
  PaymentTransferred = 'PaymentTransferred',
  Transfer = 'Transfer',
  SettlementTransactionCanceled = 'SettlementTransactionCanceled',
}

export interface Transaction {
  id: UUID;
  settlementType: SETTLEMENT_TYPES;
  settlementDate: Date;
  operationId: UUID;
  instrumentPublicAddress: ETH_Address;
  instrumentLedger: Ledger;
  deliveryQuantity: 1;
  deliverySenderAccountNumber: ETH_Address;
  deliveryReceiverAccountNumber: ETH_Address;
  paymentAmount: number;
  paymentCurrency: Currency;
  paymentReceiverAccountNumber: IBAN;
  paymentSenderAccountNumber: IBAN;
  paymentSenderLegalEntityId: LEI;
  paymentReceiverLegalEntityId: LEI;
  hash: string;
  tradeId: UUID;
  tradeDate: Date;
  additionalReaderAddresses: ETH_Address[];
  settlementModel: SETTLEMENT_MODELS;
  holdableTokenAddress: ETH_Address;
  intermediateAccountIBAN: IBAN;
  settlementStatus: SETTLEMENT_STATUSES;
}

export type ETH_Address = string;
export type Currency = string;
export type UUID = string;
export type IBAN = string;
export type ISIN = string;
export type LEI = string;
export enum SETTLEMENT_MODELS {
  DIRECT = 'DIRECT',
  INDIRECT = 'INDIRECT',
}
export enum SETTLEMENT_STATUSES {
  INITIATED = 'INITIATED',
  PENDING = 'PENDING',
  ACKNOWLEDGED = 'ACKNOWLEDGED',
  REJECTED = 'REJECTED',
  UNPROCESSED = 'UNPROCESSED',
  PROCESSED = 'PROCESSED',
  SETTLED = 'SETTLED',
  CANCELED = 'CANCELED',
}
export enum SETTLEMENT_TYPES {
  DVP = 'DVP',
  PFOD = 'PFOD',
  DWP = 'DWP',
  FOP = 'FOP',
}

export interface InstrumentDetails {
  issuer: ETH_Address;
  registrarAgentAddress: ETH_Address;
  settlerAgentAddress: ETH_Address;
  contractAddress: ETH_Address;
  initialSupply: number;
  isinCode: ISIN;
  name: string;
  symbol: string;
  denomination: number;
  divisor: number;
  startDate: Date;
  maturityDate: Date;
  firstCouponDate: Date;
  couponFrequencyInMonths: number;
  interestRateInBips: number;
  callable: boolean;
  isSoftBullet: boolean;
  softBulletPeriodInMonths: number;
}

export enum INSTRUMENT_DETAIL_TYPES {
  BOND = 'Bond',
}
