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
      type
    }
  }
`;
