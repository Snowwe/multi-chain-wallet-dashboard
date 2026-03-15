import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { TransactionItem } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getTransactions(address: string): Observable<TransactionItem[]> {
    return this.http.get<TransactionItem[]>(`${this.apiUrl}/api/transactions/${address}`);
  }
}
