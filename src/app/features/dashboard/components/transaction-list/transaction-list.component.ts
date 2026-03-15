import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TransactionItem } from '@models/transaction.model';
import { formatTokenBalance, shortenMiddle } from '@utils/balance.util';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionListComponent {
  readonly transactions = input<TransactionItem[]>([]);

  shorten(value: string): string {
    return shortenMiddle(value);
  }

  formatAmount(transaction: TransactionItem): string {
    return `${formatTokenBalance(transaction.rawBalance, transaction.decimals)} ${
      transaction.symbol
    }`;
  }
}
