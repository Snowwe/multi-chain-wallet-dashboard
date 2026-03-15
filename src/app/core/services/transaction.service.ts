import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { TransactionItem } from '@models/transaction.model';
import {
  ETHEREUM_TRANSACTIONS_MOCK,
  SOLANA_TRANSACTIONS_MOCK,
} from '@core/mocks/transactions.mock';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getTransactions(address: string, chainId: string, limit = 10): Observable<TransactionItem[]> {
    if (environment.useMockApi) {
      const data = chainId === 'solana' ? SOLANA_TRANSACTIONS_MOCK : ETHEREUM_TRANSACTIONS_MOCK;

      return of(
        data.slice(0, limit).map((item) => ({
          ...item,
          from: item.from === ETHEREUM_TRANSACTIONS_MOCK[0].from ? address : item.from,
        }))
      ).pipe(delay(700));
    }

    return this.http.get<TransactionItem[]>(`${this.apiUrl}/api/transactions/${address}`, {
      params: {
        chain: chainId,
        limit,
      },
    });
  }
}
