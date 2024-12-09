import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-reset-button",
  imports: [],
  templateUrl: "./reset-button.component.html",
  host: { class: "block" },
  styles: `
    button[type="reset"] {
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-decoration-skip-ink: none;
      text-decoration-thickness: auto;
      text-underline-offset: auto;
      text-underline-position: from-font;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetButtonComponent {}
