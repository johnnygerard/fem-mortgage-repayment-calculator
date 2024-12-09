import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MortgageCalculatorComponent } from "./components/mortgage-calculator/mortgage-calculator.component";
import { MortgageResultsComponent } from "./components/mortgage-results/mortgage-results.component";

@Component({
  selector: "app-root",
  imports: [MortgageCalculatorComponent, MortgageResultsComponent],
  templateUrl: "./app.component.html",
  host: {
    class:
      "flex flex-col tb:rounded-[1.5rem] overflow-hidden dt:flex-row bg-white tb:max-tb:w-[43rem]",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
