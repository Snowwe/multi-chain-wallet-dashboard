import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DashboardPage } from '@dashboard/dashboard-page/dashboard.page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardPage],
  template: `<app-dashboard-page />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
