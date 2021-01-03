import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-counter-demo',
  templateUrl: './counter-demo.component.html',
  styleUrls: ['./counter-demo.component.css']
})
export class CounterDemoComponent implements OnInit {
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onPlusBtnClick() {
    this.counter++;
  }

  onMinusBtnClick() {
    this.counter--;
  }
}
