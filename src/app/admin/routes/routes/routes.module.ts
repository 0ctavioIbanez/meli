import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../../pages/login/login.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { CreateComponent } from '../../pages/products/create/create.component';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { CommonModule } from '@angular/common';
import { AllComponent } from '../../pages/products/all/all.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { ModelCardComponent } from '../../components/model-card/model-card.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'products',
    component: LayoutComponent,
    children: [
      {
        path: 'product',
        component: CreateComponent
      },
      {
        path: 'all',
        component: AllComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    ToggleComponent,
    CreateComponent,
    AccordionComponent,
    AllComponent,
    ModelCardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IconsModule,
    SharedModule
  ],
  exports: [
    RouterModule,
    ToggleComponent,
    CommonModule
  ]
})
export class RoutesModule { }
