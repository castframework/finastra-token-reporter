import { gql } from 'apollo-angular';

export const GET_CURRENCY_FROM_TXS = gql`
  query GetSettlementTransactions($ledger: Ledger!, $instrumentAddress: String!) {
    getSettlementTransactions(instrumentLedger: $ledger, instrumentAddress: $instrumentAddress) {
      paymentCurrency
    }
  }
`;
