import { Injectable } from "@angular/core";
import { CHARGE_TYPE } from "../types/charge-type";
import { MortgageInput } from "../types/mortgage-input";
import { MortgageOutput } from "../types/mortgage-output";

@Injectable({
  providedIn: "root",
})
export class MortgageCalculatorService {
  compute({
    principal,
    term,
    interestRate,
    chargeType,
  }: MortgageInput): MortgageOutput {
    const monthlyInterestRate = interestRate / 100 / 12;
    const months = term * 12;
    const monthlyRepayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);
    const totalRepayment = monthlyRepayment * months;

    if (chargeType === CHARGE_TYPE.INTEREST) {
      const totalInterest = totalRepayment - principal;
      return {
        monthly: totalInterest / months,
        total: totalInterest,
        chargeType,
      };
    }

    return {
      monthly: monthlyRepayment,
      total: totalRepayment,
      chargeType,
    };
  }
}
