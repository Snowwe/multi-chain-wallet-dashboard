import { Component, input } from '@angular/core';

import { PortfolioResponse } from '@models/portfolio.model';

@Component({
  selector: 'app-portfolio-summary',
  imports: [],
  templateUrl: './portfolio-summary.component.html',
  styleUrl: './portfolio-summary.component.scss',
})
export class PortfolioSummaryComponent {
  readonly portfolio = input.required<PortfolioResponse>();
}
