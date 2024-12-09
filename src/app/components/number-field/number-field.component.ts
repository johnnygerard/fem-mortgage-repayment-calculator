import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-number-field",
  imports: [ReactiveFormsModule],
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
})
export class NumberFieldComponent {
  control = input.required<FormControl>();
  label = input.required<string>();
  unit = input.required<{
    symbol: string;
    position: "left" | "right";
  }>();

  get showErrors(): boolean {
    return (
      this.control().invalid && (this.control().touched || this.control().dirty)
    );
  }
}
