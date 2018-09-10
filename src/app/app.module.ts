import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchRobotComponent } from './search-robot/search-robot.component';
import { RobotComponent } from './robot/robot.component';
import { HttpClientModule } from '@angular/common/http';
import { RobotHomeComponent } from './robot-home/robot-home.component';
import { RobotsComponent } from './robots/robots.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchRobotComponent,
    RobotComponent,
    RobotHomeComponent,
    RobotsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
