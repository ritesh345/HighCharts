import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ngOnIt(){
    var str = "javascript";

  var a = str.length;
  console.log(a);
  }
}
