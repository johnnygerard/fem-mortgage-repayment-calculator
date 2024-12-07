import { inject, Injectable, signal } from "@angular/core";
import { MortgageInput } from "../types/mortgage-input";
import { MortgageOutput } from "../types/mortgage-output";
import { MortgageCalculatorService } from "./mortgage-calculator.service";

@Injectable({
  providedIn: "root",
})
export class MortgageService {
  #results = signal<MortgageOutput | null>(null);
  #calculator = inject(MortgageCalculatorService);

  get results() {
    return this.#results.asReadonly();
  }

  requestResults(input: MortgageInput): void {
    this.#results.set(this.#calculator.compute(input));
  }

  clearResults(): void {
    this.#results.set(null);
  }
}
