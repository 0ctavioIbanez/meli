import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { HomeComponent } from '../../pages/home/home.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../../components/cart/cart/cart.component';
import { CartComponent as SummaryPage } from '../../pages/cart/cart.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  pathMatch: 'prefix',
  children: [{
    path: '',
    component: HomeComponent
  },
{
  path: 'summary',
  component: SummaryPage
}]
}];



@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent,
    CartComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    IconsModule,
    CommonModule
  ],
  exports: [CartComponent]
})
export class RoutesModule { }
