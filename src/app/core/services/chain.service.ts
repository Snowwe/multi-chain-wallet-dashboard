import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of, shareReplay } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Chain } from '@models/chain.model';
import { CHAINS_MOCK } from '@core/mocks/chains.mock';

@Injectable({
  providedIn: 'root',
})
export class ChainService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getChains(): Observable<Chain[]> {
    if (environment.useMockApi) {
      return of(CHAINS_MOCK).pipe(delay(500), shareReplay(1));
    }

    return this.http.get<Chain[]>(`${this.apiUrl}/api/chains`).pipe(shareReplay(1));
  }
}
