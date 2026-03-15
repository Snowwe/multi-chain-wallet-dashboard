import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Chain } from '@models/chain.model';
import { walletAddressValidator } from '@utils/wallet-validator.util';

@Component({
  selector: 'app-wallet-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wallet-form.component.html',
  styleUrl: './wallet-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalletFormComponent {
  readonly chains = input<Chain[]>([]);
  readonly loading = input(false);

  readonly search = output<{ chain: Chain; address: string }>();

  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  readonly form = this.fb.nonNullable.group(
    {
      chainId: ['', Validators.required],
      address: ['', Validators.required],
    },
    { updateOn: 'blur' }
  );

  readonly selectedChain = computed<Chain | null>(() => {
    const chainId = this.form.controls.chainId.value;

    return this.chains().find((chain) => chain.id === chainId) ?? null;
  });

  readonly addressPlaceholder = computed(() => {
    const chain = this.selectedChain();

    if (!chain) {
      return 'Enter wallet address';
    }

    return chain.type === 'solana' ? 'Enter Solana wallet address' : 'Enter EVM wallet address';
  });

  constructor() {
    this.form.controls.address.addValidators(walletAddressValidator(() => this.selectedChain()));

    effect(() => {
      const chains = this.chains();
      const chainIdControl = this.form.controls.chainId;

      if (!chainIdControl.value && chains.length > 0) {
        chainIdControl.setValue(chains[0].id);
      }
    });

    this.form.controls.chainId.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.form.controls.address.updateValueAndValidity();
      });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    const chain = this.selectedChain();
    const address = this.form.controls.address.value.trim();

    if (!chain || this.form.invalid || !address) {
      return;
    }

    this.search.emit({ chain, address });
  }

  get chainIdControl() {
    return this.form.controls.chainId;
  }

  get addressControl() {
    return this.form.controls.address;
  }
}
