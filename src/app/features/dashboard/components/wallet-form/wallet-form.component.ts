import { Component, input, output } from '@angular/core';

import { Chain } from '@models/chain.model';

@Component({
  selector: 'app-wallet-form',
  imports: [],
  templateUrl: './wallet-form.component.html',
  styleUrl: './wallet-form.component.scss',
})
export class WalletFormComponent {
  readonly chains = input<Chain[]>([]);
  readonly loading = input(false);

  readonly search = output<{ chain: Chain; address: string }>();
}
