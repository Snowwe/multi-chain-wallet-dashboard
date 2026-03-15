import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenBalance } from '@models/portfolio.model';
import { formatTokenBalance, formatUsd } from '@utils/balance.util';

@Component({
  selector: 'app-token-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './token-table.component.html',
  styleUrl: './token-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenTableComponent {
  readonly tokens = input<TokenBalance[]>([]);

  formatBalance(token: TokenBalance): string {
    return formatTokenBalance(token.rawBalance, token.decimals);
  }

  formatTokenUsdValue(token: TokenBalance): string {
    return formatUsd(token.usdValue);
  }
}
