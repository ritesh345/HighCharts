import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-barchart2',
  templateUrl: './barchart2.component.html',
  styleUrls: ['./barchart2.component.scss']
})
export class Barchart2Component {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Top 3 Campaigns by Conversion"
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    chart: {type: 'bar',height:'220px', backgroundColor: '#fff' },
    xAxis: {
      categories: ["Campagin2", "Campagin3", "Campagin1"]
    },
    
    series: [
       {
        type: "spline",
        data: [1,3,5,]
      }
    ]
  };
}
