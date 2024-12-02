import { computeMortgage } from "@/app/mortgage-calculator";
import { faker } from "@faker-js/faker";

describe("Mortgage calculator", () => {
  test("Repayment value is correct", () => {
    const principal = faker.number.int({ min: 10_000, max: 1_000_000 });
    const term = faker.number.int({ min: 1, max: 30 });

    const interestRate = faker.number.float({
      min: 1,
      max: 10,
      fractionDigits: 2,
    });

    const { monthly, total } = computeMortgage(
      principal,
      term,
      interestRate,
      "REPAYMENT",
    );

    let remaining = principal;
    const coefficient = 1 + interestRate / 100 / 12;
    const months = term * 12;

    for (let i = 0; i < months; i++) {
      remaining *= coefficient;
      remaining -= monthly;
    }

    expect(total).toBeCloseTo(monthly * months);
    expect(remaining).toBeCloseTo(0);
  });
});
