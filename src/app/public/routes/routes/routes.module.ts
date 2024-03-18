import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { HomeComponent } from '../../pages/home/home.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { CommonModule } from '@angular/common';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  pathMatch: 'prefix',
  children: [{
    path: '',
    component: HomeComponent
  }]
}];



@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    IconsModule,
    CommonModule
  ]
})
export class RoutesModule { }
