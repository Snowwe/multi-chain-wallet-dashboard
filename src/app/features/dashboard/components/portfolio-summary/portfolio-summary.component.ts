import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioResponse } from '@models/portfolio.model';
import { formatTokenBalance, formatUsd } from '@utils/balance.util';

@Component({
  selector: 'app-portfolio-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-summary.component.html',
  styleUrl: './portfolio-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioSummaryComponent {
  readonly portfolio = input.required<PortfolioResponse>();

  readonly nativeBalanceFormatted = computed(() => {
    const nativeBalance = this.portfolio().nativeBalance;

    return formatTokenBalance(nativeBalance.rawBalance, nativeBalance.decimals);
  });

  readonly nativeUsdFormatted = computed(() => {
    return formatUsd(this.portfolio().nativeBalance.usdValue);
  });

  readonly totalUsdFormatted = computed(() => {
    return formatUsd(this.portfolio().totalUsdValue);
  });
}
