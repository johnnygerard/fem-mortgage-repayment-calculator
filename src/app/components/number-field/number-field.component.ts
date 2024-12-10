import { animate, style, transition, trigger } from "@angular/animations";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  signal,
} from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ErrorPipe } from "../../pipes/error.pipe";
import { showValidationErrors } from "../../utils/show-validation-errors";

@Component({
  selector: "app-number-field",
  imports: [ReactiveFormsModule, ErrorPipe],
  templateUrl: "./number-field.component.html",
  host: { class: "block" },
  styles: `
    /* Hide number input arrows */
    input[type="number"] {
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        display: none;
      }

      /* Firefox */
      appearance: textfield;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("validationMessage", [
      transition(":enter", [style({ opacity: 0 }), animate("300ms ease-out")]),
    ]),
  ],
})
export class NumberFieldComponent implements OnDestroy {
  control = input.required<FormControl>();
  label = input.required<string>();
  max = input.required<number>();
  min = input.required<number>();
  step = input.required<number>();
  isFormSubmitted = input.required<boolean>();
  isActive = signal(false);
  unit = input.required<{
    symbol: string;
    position: "left" | "right";
  }>();
  #timeoutId = 0;

  get showErrors(): boolean {
    return showValidationErrors(this.control(), this.isFormSubmitted());
  }

  refreshActiveState(): void {
    clearTimeout(this.#timeoutId);
    this.isActive.set(true);
    this.#timeoutId = window.setTimeout(() => this.isActive.set(false), 1000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.#timeoutId);
  }
}
