import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-radio-indicator",
  imports: [],
  templateUrl: "./radio-indicator.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioIndicatorComponent {
  isChecked = input.required<boolean>();
}