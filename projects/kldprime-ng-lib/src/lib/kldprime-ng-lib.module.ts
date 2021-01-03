import { NgModule } from '@angular/core';
import { KLDPrimeNgLibComponent } from './kldprime-ng-lib.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [KLDPrimeNgLibComponent, CounterDemoComponent],
  imports: [
    ButtonModule
  ],
  exports: [KLDPrimeNgLibComponent, CounterDemoComponent]
})
export class KLDPrimeNgLibModule { }
