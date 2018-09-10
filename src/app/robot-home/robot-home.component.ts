import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { RobotService } from '../robot-service';
import { robot } from '../robot';
import { Input } from '@angular/core';
@Component({
  selector: 'app-robot-home',
  templateUrl: './robot-home.component.html',
  styleUrls: ['./robot-home.component.css']
})
export class RobotHomeComponent implements OnInit {
  @Input() robo: robot;
  // @Output() robotObject = new EventEmitter<robot[]>();
  constructor(private robotService: RobotService) {
     
   }

  ngOnInit() {}

}
