import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputQuantityComponent } from './components/input-quantity/input-quantity.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputQuantityComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ InputQuantityComponent ]
})
export class SharedModule { }
