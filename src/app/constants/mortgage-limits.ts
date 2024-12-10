export const MORTGAGE_LIMITS = {
  PRINCIPAL: {
    MIN: 10_000,
    MAX: 10_000_000,
  },
  TERM: {
    MIN: 1,
    MAX: 50,
  },
  INTEREST_RATE: {
    MIN: 0.1,
    MAX: 10,
  },
} as const;
