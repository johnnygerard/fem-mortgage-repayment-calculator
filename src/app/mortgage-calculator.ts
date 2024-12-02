/**
 * Compute the mortgage repayment or interest.
 * @param principal - The principal amount
 * @param term - The loan term in years
 * @param interestRate - The annual fixed interest rate in percentage
 * @param resultType - The type of result to compute
 * @returns The monthly and total mortgage repayment or interest
 */
export const computeMortgage = (
  principal: number,
  term: number,
  interestRate: number,
  resultType: "REPAYMENT" | "INTEREST",
): { monthly: number; total: number } => {
  const monthlyInterestRate = interestRate / 100 / 12;
  const months = term * 12;
  const coefficient = (1 + monthlyInterestRate) ** months;

  const monthly =
    (principal * monthlyInterestRate * coefficient) / (coefficient - 1);
  const total = monthly * months;
  const totalInterest = total - principal;
  const monthlyInterest = totalInterest / months;

  return resultType === "REPAYMENT"
    ? { monthly, total }
    : {
        monthly: monthlyInterest,
        total: totalInterest,
      };
};
