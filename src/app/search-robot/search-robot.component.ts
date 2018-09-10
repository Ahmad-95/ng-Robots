import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { RobotService } from '../robot-service';
import { robot } from '../robot';
import { RobotComponent } from '../robot/robot.component';

@Component({
  selector: 'app-search-robot',
  templateUrl: './search-robot.component.html',
  styleUrls: ['./search-robot.component.css']
})
export class SearchRobotComponent implements OnInit {
  @Output() searchInputChanged = new EventEmitter<string>();

  constructor() { }
  ngOnInit() {
  }

  onSearchInput(searchInput: string) {
    console.log('search', searchInput)
    this.searchInputChanged.emit(searchInput);
  }

}
