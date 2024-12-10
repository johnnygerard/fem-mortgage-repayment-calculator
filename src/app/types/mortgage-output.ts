import { ChargeType } from "./charge-type";

export type MortgageOutput = {
  monthly: number;
  total: number;
  chargeType: ChargeType;
};
