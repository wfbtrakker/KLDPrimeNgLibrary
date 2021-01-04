import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-label-value',
  templateUrl: './label-value.component.html',
  styleUrls: ['./label-value.component.css']
})
export class LabelValueComponent implements OnInit {
  @Input() labelString = '';
  @Input() valueString = '';

  constructor() { }

  ngOnInit(): void {
  }

}
