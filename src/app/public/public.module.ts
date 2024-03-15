import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './components/chart/chart.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { RoutesModule } from './routes/routes/routes.module';



@NgModule({
  declarations: [
    ChartComponent,
    SearchBarComponent,
    LayoutComponent
  ],
  exports: [
    ChartComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    RoutesModule
  ]
})
export class PublicModule { }
