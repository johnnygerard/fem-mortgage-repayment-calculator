import { CurrencyPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MortgageService } from "../../services/mortgage.service";

@Component({
  selector: "app-mortgage-results",
  imports: [CurrencyPipe],
  templateUrl: "./mortgage-results.component.html",
  host: {
    class:
      "text-preset-4 text-slate-300 block bg-slate-900 py-400 px-300 tb:p-500 dt:rounded-bl-[5rem]",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MortgageResultsComponent {
  results = inject(MortgageService).results;
}
