import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {

  Highcharts = Highcharts;
  columnchart:any={
   
    series:[
      {
        data: [3,2,4,6,8,10],
      }
    ],
 
    chart: {type: 'column',height:'220px', backgroundColor: '#fff'},

    title: {text: 'Visitors by User Type'},

    xAxis:{
      
       categories:["w5", "w6","w7","w8","w9","w10", "w11"] 
       
      } ,   
    
      yAxis:{
        categories:[
          "w1",
          "w2",
          "w3",
          "w4",
          "w5",
          "w6",
          "w7",
          "w8",
          "w9",
        ],
        
      } ,
      credits: {
        enabled: false
    },
    

}
}
