import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { KLDPrimeNgLibModule } from 'kldprime-ng-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KLDPrimeNgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
