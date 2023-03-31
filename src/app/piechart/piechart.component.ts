import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {

  Highcharts = Highcharts;
  piechart:any={
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
              dataLabels: {
                  enabled: true,
            
              }
          }
          
      },
      
      title: {text: 'Traffic Sources'},
      
      chart: {type: 'pie',height:'220px', 
      backgroundColor: '#fff' ,
      
      },

   series:[
    
        {
          name: 'direct',
         type:'pie',
          data: [
            {name:'direct',y:1,color:'#0096FF',Company:'direct'},
            {name:'display',y:2,color:'#4169E1'},
            {name:'organic',y:3,color:'#40B5AD'},
            {name:'paid',y:4,color:'#89CFF0'},
            {name:'referral',y:5,color:'#00008B'},
            {name:'social',y:6,color:'#7DF9FF'},
          ],
          
        }],
        
       };
}
