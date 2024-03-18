import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { CreateComponent } from '../../pages/products/create/create.component';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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
      },
      {
        path: 'products/create',
        component: CreateComponent
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
    AccordionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  exports: [
    RouterModule,
    ToggleComponent,
    CommonModule
  ]
})
export class RoutesModule { }
