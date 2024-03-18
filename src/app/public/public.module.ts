import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './components/chart/chart.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { RoutesModule } from './routes/routes/routes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ChartComponent,
    SearchBarComponent,
    LayoutComponent,
  ],
  exports: [
    ChartComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    RoutesModule,
    RouterModule
  ]
})
export class PublicModule { }
