import { Component } from '@angular/core';
import { robot } from './robot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Robots-Directory';
  robosListner: robot[];

  callRobotFunction(value: any){
    this.robosListner = value;
    console.log("==>Listening");
  }
}
