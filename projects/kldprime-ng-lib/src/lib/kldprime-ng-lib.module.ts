import { NgModule } from '@angular/core';
import { KLDPrimeNgLibComponent } from './kldprime-ng-lib.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';
import {ButtonModule} from 'primeng/button';
import { LabelValueComponent } from './label-value/label-value.component';


@NgModule({
  declarations: [KLDPrimeNgLibComponent, CounterDemoComponent, LabelValueComponent],
  imports: [
    ButtonModule
  ],
  exports: [KLDPrimeNgLibComponent, CounterDemoComponent, LabelValueComponent]
})
export class KLDPrimeNgLibModule { }
