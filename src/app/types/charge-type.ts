export const CHARGE_TYPE = {
  TOTAL: "total",
  INTEREST: "interest",
} as const;

export type ChargeType = (typeof CHARGE_TYPE)[keyof typeof CHARGE_TYPE];
