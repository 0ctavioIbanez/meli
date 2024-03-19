import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { RoutesModule } from './routes/routes/routes.module';
import { RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchBarComponent,
    LayoutComponent,
    CartComponent,
  ],
  exports: [
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    RoutesModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class PublicModule { }
