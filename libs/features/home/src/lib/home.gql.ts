import { gql } from 'apollo-angular';

export const GET_WHOAMI = gql`
  query Whoami($ledger: Ledger!) {
    whoami(ledger: $ledger)
  }
`;
