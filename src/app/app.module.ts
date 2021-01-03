import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';
import { KLDPrimeNgLibModule } from 'kldprime-ng-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CheckboxModule,
    InputNumberModule,
    FormsModule,
    KLDPrimeNgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
