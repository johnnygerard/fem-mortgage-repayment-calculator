import { CurrencyPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MortgageService } from "../../services/mortgage.service";
import { CHARGE_TYPE } from "../../types/charge-type";

@Component({
  selector: "app-mortgage-results",
  imports: [CurrencyPipe],
  templateUrl: "./mortgage-results.component.html",
  host: {
    class:
      "text-preset-4 text-slate-300 block bg-slate-900 py-400 px-300 tb:p-500 dt:rounded-bl-[5rem] dt:grid dt:place-content-center",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MortgageResultsComponent {
  results = inject(MortgageService).results;
  readonly CHARGE_TYPE = CHARGE_TYPE;
}
