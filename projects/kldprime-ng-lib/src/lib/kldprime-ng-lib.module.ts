import { NgModule } from '@angular/core';
import { KLDPrimeNgLibComponent } from './kldprime-ng-lib.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';



@NgModule({
  declarations: [KLDPrimeNgLibComponent, CounterDemoComponent],
  imports: [
  ],
  exports: [KLDPrimeNgLibComponent, CounterDemoComponent]
})
export class KLDPrimeNgLibModule { }
