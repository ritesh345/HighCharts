import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent {

  highcharts = Highcharts;
  chartOptions:any={
    title: {text: 'Visits By Week Of Year'},
    series:[
      {
        type:'line',
        name: 'Visits1',
        data: [0.90,0.60,0.40,0.40,0.60,2,2,2,3,3,4,0.40 ],
      },
      {
        name: 'Visits',
        type:'line',
        data: [0.90,0.60,0.40,0.40,0.60,4,5,7,8,8,1,2 ],
      }
    ],
 
    chart: {height:'220px', backgroundColor: '#fff' },
   
    xAxis:{
      
       categories:["w5", "w6", "w8","w10","w12","w14","w16","w18","w20","w22","w24","w26","w28"] 
       
      } , 
        
    
      yAxis:{
        categories:[200,400,600,800,1000],
        labels: {
          format: '{value}%',
          
        }
        
      } ,
    //   credits: {
    //     enabled: true
    // },
  
    
  
  };
  
}
