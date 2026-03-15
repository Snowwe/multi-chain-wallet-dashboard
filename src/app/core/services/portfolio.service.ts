import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { PortfolioResponse } from '@models/portfolio.model';
import { ETHEREUM_PORTFOLIO_MOCK, SOLANA_PORTFOLIO_MOCK } from '@core/mocks/portfolio.mock';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getPortfolio(chainId: string, address: string): Observable<PortfolioResponse> {
    if (environment.useMockApi) {
      const normalizedAddress = address.trim().toLowerCase();

      if (chainId === 'ethereum' || chainId === 'polygon' || chainId === 'bsc') {
        if (!normalizedAddress.startsWith('0x')) {
          return throwError(() => new Error('Invalid EVM address'));
        }

        return of({
          ...ETHEREUM_PORTFOLIO_MOCK,
          address,
          chain: chainId,
          nativeBalance: {
            ...ETHEREUM_PORTFOLIO_MOCK.nativeBalance,
            symbol: chainId === 'polygon' ? 'MATIC' : chainId === 'bsc' ? 'BNB' : 'ETH',
          },
        }).pipe(delay(900));
      }

      if (chainId === 'solana') {
        return of({
          ...SOLANA_PORTFOLIO_MOCK,
          address,
          chain: chainId,
        }).pipe(delay(900));
      }

      return throwError(() => new Error('Unsupported chain'));
    }

    return this.http.get<PortfolioResponse>(`${this.apiUrl}/api/portfolio/${address}`, {
      params: {
        chain: chainId,
      },
    });
  }
}
