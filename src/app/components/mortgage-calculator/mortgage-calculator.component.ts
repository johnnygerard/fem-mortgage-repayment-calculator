import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MORTGAGE_LIMITS } from "../../constants/mortgage-limits";
import { CHARGE_TYPE, ChargeType } from "../../types/charge-type";
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
  readonly LIMITS = MORTGAGE_LIMITS;

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
  protected readonly CHARGE_TYPE = CHARGE_TYPE;
}
