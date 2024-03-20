import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    AdminModule,
    SharedModule,
    NgToastModule
  ],
  exports: [ SharedModule ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
