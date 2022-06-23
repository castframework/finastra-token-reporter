import { gql } from 'apollo-angular';

export const GET_WHOAMI = gql`
  query Whoami($ledger: Ledger!) {
    whoami(ledger: $ledger)
  }
`;

export const GET_INSTRUMENT_POSITIONS = gql`
  query Query($ledger: Ledger!, $instrumentAddress: String!) {
    getInstrumentPositions(ledger: $ledger, instrumentAddress: $instrumentAddress) {
      balance
    }
  }
`;
