import { TestBed } from "@angular/core/testing";
import { faker } from "@faker-js/faker";
import {
  MAX_INTEREST_RATE,
  MAX_PRINCIPAL,
  MAX_TERM,
  MIN_INTEREST_RATE,
  MIN_PRINCIPAL,
  MIN_TERM,
} from "../constants/mortgage-limits";
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
      min: MIN_PRINCIPAL,
      max: MAX_PRINCIPAL,
    });
    const term = faker.number.int({ min: MIN_TERM, max: MAX_TERM });
    const interestRate = faker.number.float({
      min: MIN_INTEREST_RATE,
      max: MAX_INTEREST_RATE,
    });
    const INTEREST_ONLY = false;

    const { monthly, total } = service.compute(
      principal,
      term,
      interestRate,
      INTEREST_ONLY,
    );

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
