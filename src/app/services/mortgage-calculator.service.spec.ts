import { TestBed } from "@angular/core/testing";
import { faker } from "@faker-js/faker";
import { MORTGAGE_LIMITS as LIMITS } from "../constants/mortgage-limits";
import { CHARGE_TYPE } from "../types/charge-type";
import { MortgageCalculatorService } from "./mortgage-calculator.service";

describe("MortgageCalculatorService", () => {
  let service: MortgageCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageCalculatorService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should compute the monthly repayments", () => {
    const principal = faker.number.int({
      min: LIMITS.PRINCIPAL.MIN,
      max: LIMITS.PRINCIPAL.MAX,
    });
    const term = faker.number.int({
      min: LIMITS.TERM.MIN,
      max: LIMITS.TERM.MAX,
    });
    const interestRate = faker.number.float({
      min: LIMITS.INTEREST_RATE.MIN,
      max: LIMITS.INTEREST_RATE.MAX,
    });
    const { monthly, total } = service.compute({
      principal,
      term,
      interestRate,
      chargeType: CHARGE_TYPE.TOTAL,
    });

    expect(monthly * term * 12).toBeCloseTo(total);

    let remaining = principal;
    const monthlyInterestRate = interestRate / 100 / 12;
    for (let i = 0; i < term * 12; i++) {
      remaining *= 1 + monthlyInterestRate;
      remaining -= monthly;
    }

    expect(remaining).toBeCloseTo(0);
  });
});
