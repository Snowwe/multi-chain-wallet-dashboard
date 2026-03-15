import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Chain } from '@models/chain.model';

@Injectable({
  providedIn: 'root',
})
export class ChainService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getChains(): Observable<Chain[]> {
    return this.http.get<Chain[]>(`${this.apiUrl}/api/chains`).pipe(shareReplay(1));
  }
}
