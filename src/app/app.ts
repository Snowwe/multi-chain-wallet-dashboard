import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DashboardPageComponent } from '@dashboard/dashboard-page/dashboard-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardPageComponent],
  template: `<app-dashboard-page />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
