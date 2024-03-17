import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './routes/routes/routes.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    RoutesModule,
    FormsModule
  ],
  exports: [ RouterModule ]
})
export class AdminModule { }
