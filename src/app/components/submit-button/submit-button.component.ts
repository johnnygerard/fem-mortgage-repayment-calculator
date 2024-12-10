import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-submit-button",
  imports: [],
  templateUrl: "./submit-button.component.html",
  host: { class: "block" },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitButtonComponent {}
