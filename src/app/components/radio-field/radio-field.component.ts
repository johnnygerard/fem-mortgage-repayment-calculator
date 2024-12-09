import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { RadioIndicatorComponent } from "./radio-indicator/radio-indicator.component";

@Component({
  selector: "app-radio-field",
  imports: [ReactiveFormsModule, RadioIndicatorComponent],
  templateUrl: "./radio-field.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioFieldComponent implements OnInit {
  control = input.required<FormControl>();
  label = input.required<string>();
  value = input.required<string>();
  isChecked = signal(false);
  #destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.control()
      .valueChanges.pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((value) => {
        this.isChecked.set(value === this.value());
      });
  }
}
