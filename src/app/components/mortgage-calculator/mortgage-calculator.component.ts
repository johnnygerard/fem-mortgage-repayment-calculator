import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MORTGAGE_LIMITS } from "../../constants/mortgage-limits";
import { MortgageService } from "../../services/mortgage.service";
import { CHARGE_TYPE, ChargeType } from "../../types/charge-type";
import { MortgageInput } from "../../types/mortgage-input";
import { NumberFieldComponent } from "../number-field/number-field.component";
import { RadioFieldComponent } from "../radio-field/radio-field.component";
import { ResetButtonComponent } from "../reset-button/reset-button.component";
import { SubmitButtonComponent } from "../submit-button/submit-button.component";

@Component({
  selector: "app-mortgage-calculator",
  imports: [
    ReactiveFormsModule,
    NumberFieldComponent,
    RadioFieldComponent,
    ResetButtonComponent,
    SubmitButtonComponent,
  ],
  templateUrl: "./mortgage-calculator.component.html",
  host: { class: "block" },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MortgageCalculatorComponent {
  readonly CHARGE_TYPE = CHARGE_TYPE;
  readonly LIMITS = MORTGAGE_LIMITS;
  mortgageService = inject(MortgageService);

  form = inject(FormBuilder).group({
    principal: [
      null as number | null,
      [
        Validators.required,
        Validators.min(this.LIMITS.PRINCIPAL.MIN),
        Validators.max(this.LIMITS.PRINCIPAL.MAX),
      ],
    ],
    term: [
      null as number | null,
      [
        Validators.required,
        Validators.min(this.LIMITS.TERM.MIN),
        Validators.max(this.LIMITS.TERM.MAX),
      ],
    ],
    interestRate: [
      null as number | null,
      [
        Validators.required,
        Validators.min(this.LIMITS.INTEREST_RATE.MIN),
        Validators.max(this.LIMITS.INTEREST_RATE.MAX),
      ],
    ],
    chargeType: [null as ChargeType | null, [Validators.required]],
  });

  showErrors(control: AbstractControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  onSubmit(): void {
    if (!this.form.valid) return;
    this.mortgageService.requestResults(this.form.value as MortgageInput);
  }

  onReset(): void {
    this.mortgageService.clearResults();
  }
}
