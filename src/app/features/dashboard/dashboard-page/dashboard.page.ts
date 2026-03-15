import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  OnInit,
  DestroyRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize, forkJoin } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Chain } from '@models/chain.model';
import { PortfolioResponse } from '@models/portfolio.model';
import { TransactionItem } from '@models/transaction.model';

import { ChainService } from '@services/chain.service';
import { PortfolioService } from '@services/portfolio.service';
import { TransactionService } from '@services/transaction.service';

import { WalletFormComponent } from '@dashboard/components/wallet-form/wallet-form.component';
import { PortfolioSummaryComponent } from '@dashboard/components/portfolio-summary/portfolio-summary.component';
import { TokenTableComponent } from '@dashboard/components/token-table/token-table.component';
import { TransactionListComponent } from '@dashboard/components/transaction-list/transaction-list.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    WalletFormComponent,
    PortfolioSummaryComponent,
    TokenTableComponent,
    TransactionListComponent,
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  private readonly chainService = inject(ChainService);
  private readonly portfolioService = inject(PortfolioService);
  private readonly transactionService = inject(TransactionService);

  readonly chains = signal<Chain[]>([]);
  readonly portfolio = signal<PortfolioResponse | null>(null);
  readonly transactions = signal<TransactionItem[]>([]);

  readonly loadingChains = signal(false);
  readonly loadingWallet = signal(false);
  readonly error = signal<string | null>(null);

  readonly hasData = computed(() => !!this.portfolio());
  readonly hasTransactions = computed(() => this.transactions().length > 0);

  ngOnInit(): void {
    this.loadChains();
  }

  onSearch(payload: { chain: Chain; address: string }): void {
    this.loadingWallet.set(true);
    this.error.set(null);

    forkJoin({
      portfolio: this.portfolioService.getPortfolio(payload.chain.id, payload.address),
      transactions: this.transactionService.getTransactions(payload.address),
    })
      .pipe(
        finalize(() => this.loadingWallet.set(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: ({ portfolio, transactions }) => {
          this.portfolio.set(portfolio);
          this.transactions.set(transactions);
        },
        error: () => {
          this.portfolio.set(null);
          this.transactions.set([]);
          this.error.set(
            'Failed to load wallet data. Please check the address or try again later.'
          );
        },
      });
  }

  private loadChains(): void {
    this.loadingChains.set(true);
    this.error.set(null);

    this.chainService
      .getChains()
      .pipe(
        finalize(() => this.loadingChains.set(false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (chains) => {
          this.chains.set(chains);
        },
        error: () => {
          this.error.set('Failed to load blockchain networks.');
        },
      });
  }
}
