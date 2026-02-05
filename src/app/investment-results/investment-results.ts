import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
// export class InvestmentResults {
//   @Input() results?: {
//         year: number;
//         interest: number;
//         valueEndOfYear: number;
//         annualInvestment: number;
//         totalInterest: number;
//         totalAmountInvested: number;
//       } []
// }

export class InvestmentResults {
  // results = input<{
  //       year: number;
  //       interest: number;
  //       valueEndOfYear: number;
  //       annualInvestment: number;
  //       totalInterest: number;
  //       totalAmountInvested: number;
  //     } [] | undefined>();
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
