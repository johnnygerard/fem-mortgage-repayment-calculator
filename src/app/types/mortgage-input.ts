import { ChargeType } from "./charge-type";

export type MortgageInput = {
  principal: number;
  term: number;
  interestRate: number;
  chargeType: ChargeType;
};
