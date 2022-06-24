import { gql } from 'apollo-angular';

export const GET_ALL_INSTRUMENTS = gql`
  query GetAllInstruments($ledger: Ledger!) {
    getAllInstruments(ledger: $ledger)
  }
`;

export const GET_INSTRUMENT_DETAILS_SHORT = gql`
  query GetInstrumentDetails($ledger: Ledger!, $contractAddress: String!) {
    getInstrumentDetails(instrumentLedger: $ledger, contractAddress: $contractAddress) {
      name
      type
    }
  }
`;

export const GET_INSTRUMENT_DETAILS = gql`
  query GetAllInstrumentDetails($ledger: Ledger!, $contractAddress: String!) {
    getInstrumentDetails(instrumentLedger: $ledger, contractAddress: $contractAddress) {
      issuer
      name
      isinCode
      maturityDate
      interestRateInBips
      contractAddress
    }
  }
`;
