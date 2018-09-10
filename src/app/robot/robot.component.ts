import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { RobotService } from '../robot-service';
import { robot } from '../robot';
import { Input } from '@angular/core';


@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})

export class RobotComponent implements OnInit {
  robots: robot[] = [];
  robotsToDisplay: robot[] = [];
  constructor(private robotService: RobotService) {
   }

   ngOnInit() {
     this.getRobos();
   }

   getRobos(){
     this.robotService.showRobot()
     .subscribe((robos: robot[]) => {
       console.log('robos', robos);
        this.robots = robos;
        this.robotsToDisplay = this.robots;
     }, err => {
       console.log('xaxa', err);
     }
    );
   }

   onSearch(searchInput: string){
     this.robotsToDisplay = this.robots.filter(robo => robo.username.toLowerCase().includes(searchInput));
   
  }
  

}
