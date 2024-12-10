import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MortgageCalculatorComponent } from "../../components/mortgage-calculator/mortgage-calculator.component";
import { MortgageResultsComponent } from "../../components/mortgage-results/mortgage-results.component";

@Component({
  selector: "app-home-page",
  imports: [MortgageCalculatorComponent, MortgageResultsComponent],
  templateUrl: "./home-page.component.html",
  host: {
    class:
      "flex flex-col tb:rounded-[1.5rem] overflow-hidden dt:flex-row bg-white tb:max-tb:w-[43rem] shadow-[0_32px_64px_rgba(19,48,65,0.1)]",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
