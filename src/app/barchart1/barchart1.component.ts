import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-barchart1',
  templateUrl: './barchart1.component.html',
  styleUrls: ['./barchart1.component.scss']
})
export class Barchart1Component {
  
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Top 3 Channel by Conversion"
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    chart: {type: 'bar',height:'220px', backgroundColor: '#fff', },
    xAxis: {
      categories: ["Organic", "Paid Search", "Direct"]
    },
    
    series: [
       {
        type: "bar",
        data: [1, 5, 2,]
      }
    ]
  };

}
