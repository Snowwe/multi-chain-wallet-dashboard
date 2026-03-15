import { Component, input } from '@angular/core';

import { TokenBalance } from '@models/portfolio.model';

@Component({
  selector: 'app-token-table',
  imports: [],
  templateUrl: './token-table.component.html',
  styleUrl: './token-table.component.scss',
})
export class TokenTableComponent {
  readonly tokens = input<TokenBalance[]>([]);
}
