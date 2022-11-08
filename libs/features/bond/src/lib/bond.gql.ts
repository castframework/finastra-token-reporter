import { gql } from 'apollo-angular';

export const GET_INSTRUMENT_DETAILS = gql`
  query GetInstrumentDetails($ledger: Ledger!, $contractAddress: String!) {
    getInstrumentDetails(instrumentLedger: $ledger, contractAddress: $contractAddress) {
      issuer
      registrarAgentAddress
      settlerAgentAddress
      contractAddress
      initialSupply
      isinCode
      name
      symbol
      denomination
      divisor
      startDate
      maturityDate
      firstCouponDate
      couponFrequencyInMonths
      interestRateInBips
      callable
      isSoftBullet
      softBulletPeriodInMonths
    }
  }
`;

export const GET_SETTLEMENT_TRANSACTIONS = gql`
  query GetSettlementTransactions($ledger: Ledger!, $instrumentAddress: String!) {
    getSettlementTransactions(instrumentLedger: $ledger, instrumentAddress: $instrumentAddress) {
      id
      settlementType
      settlementDate
      operationId
      instrumentPublicAddress
      instrumentLedger
      deliveryQuantity
      deliverySenderAccountNumber
      deliveryReceiverAccountNumber
      paymentAmount
      paymentCurrency
      paymentReceiverAccountNumber
      paymentSenderAccountNumber
      paymentSenderLegalEntityId
      paymentReceiverLegalEntityId
      hash
      tradeId
      tradeDate
      additionalReaderAddresses
      settlementModel
      holdableTokenAddress
      intermediateAccountIBAN
      settlementStatus
    }
  }
`;

export const GET_INSTRUMENT_POSITIONS = gql`
  query GetInstrumentsPositions($ledger: Ledger!, $instrumentAddress: String!) {
    getInstrumentPositions(ledger: $ledger, instrumentAddress: $instrumentAddress) {
      instrumentAddress
      ledger
      balance
      legalEntityAddress
      symbol
      valueInFiat
      currency
      percentage
      unlocked
      locked
      symbol
    }
  }
`;
