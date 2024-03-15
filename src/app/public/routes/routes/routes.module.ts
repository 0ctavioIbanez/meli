import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../layout/layout/layout.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  pathMatch: 'prefix'
}];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RoutesModule { }
