import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-root",
  imports: [],
  templateUrl: "./app.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
