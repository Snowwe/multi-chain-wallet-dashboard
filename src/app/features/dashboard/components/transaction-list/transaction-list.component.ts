import { Component, input } from '@angular/core';

import { TransactionItem } from '@models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  imports: [],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss',
})
export class TransactionListComponent {
  readonly transactions = input<TransactionItem[]>([]);
}
