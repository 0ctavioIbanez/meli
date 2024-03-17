import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CreateComponent } from '../../pages/products/create/create.component';
import { ToggleComponent } from '../../components/toggle/toggle.component';
import { CommonModule } from '@angular/common';


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
    SidebarComponent,
    ToggleComponent,
    CreateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule,
    ToggleComponent,
    CommonModule
  ]
})
export class RoutesModule { }
