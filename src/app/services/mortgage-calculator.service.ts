import { Injectable } from "@angular/core";
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
    interestOnly,
  }: MortgageInput): MortgageOutput {
    const monthlyInterestRate = interestRate / 100 / 12;
    const months = term * 12;
    const monthlyRepayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);
    const totalRepayment = monthlyRepayment * months;

    if (interestOnly) {
      const totalInterest = totalRepayment - principal;
      return {
        monthly: totalInterest / months,
        total: totalInterest,
        interestOnly,
      };
    }

    return {
      monthly: monthlyRepayment,
      total: totalRepayment,
      interestOnly,
    };
  }
}
