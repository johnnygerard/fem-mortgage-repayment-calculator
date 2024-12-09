import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CHARGE_TYPE } from "../../types/charge-type";
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
  form = inject(NonNullableFormBuilder).group({
    principal: ["", [Validators.required]],
    term: ["", [Validators.required]],
    interestRate: ["", [Validators.required]],
    chargeType: ["", [Validators.required]],
  });
  protected readonly CHARGE_TYPE = CHARGE_TYPE;
}
