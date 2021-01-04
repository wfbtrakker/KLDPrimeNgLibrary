import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KLDPrimeNgLibrary';
  selectedValues: string[] = ['val1', 'val2'];
  numberValue = 1;

  labelValue = 'test1';
  stringValue = 'test2';
}
