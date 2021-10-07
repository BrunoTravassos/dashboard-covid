import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCovidComponent } from './dashboard-covid.component';



@NgModule({
  declarations: [
    DashboardCovidComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DashboardCovidComponent
  ],
})
export class DashboardCovidModule { }
