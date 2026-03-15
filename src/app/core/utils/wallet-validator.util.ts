import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Chain } from '../models/chain.model';

export function walletAddressValidator(getChain: () => Chain | null): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '').trim();
    const chain = getChain();

    if (!value || !chain) {
      return null;
    }

    if (chain.type === 'evm') {
      const isValidEvm = /^0x[a-fA-F0-9]{40}$/.test(value);

      return isValidEvm ? null : { invalidWalletAddress: true };
    }

    if (chain.type === 'solana') {
      const isValidSolana = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(value);

      return isValidSolana ? null : { invalidWalletAddress: true };
    }

    return null;
  };
}
