import { Component } from '@angular/core';

@Component({
  selector: 'app-tofixed',
  templateUrl: './tofixed.component.html',
  styleUrls: ['./tofixed.component.scss']
})
export class TofixedComponent {
  myNumber = 80.9884555;
  decimalPlaces = 2;

  formatNumber(number: number, decimalPlaces: number): string {
    if (decimalPlaces < 0) {
      decimalPlaces = 0;
    } else if (decimalPlaces > 20) {
      decimalPlaces = 20;
    }
    return number.toFixed(decimalPlaces);
  }
   
}
