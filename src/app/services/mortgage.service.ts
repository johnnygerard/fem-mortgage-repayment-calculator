import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MortgageService {
  compute(
    principal: number,
    term: number,
    interestRate: number,
    interestOnly: boolean,
  ): { monthly: number; total: number } {
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
      return { monthly: totalInterest / months, total: totalInterest };
    }

    return { monthly: monthlyRepayment, total: totalRepayment };
  }
}
