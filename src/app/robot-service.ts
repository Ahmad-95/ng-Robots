import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { robot } from './robot';

@Injectable({
  providedIn: 'root'
})

export class RobotService {
  constructor(private http: HttpClient) { }

  showRobot(): Observable<robot[]> {

    console.log("Service");
    return this.http.get<robot[]>('http://jsonplaceholder.typicode.com/users');
  }

  searchRobot(username: string): Observable<robot[]>{
    if (!username) {
      
         return of<any>(username.trim());
    }    
    return this.http.get<robot[]>('http://jsonplaceholder.typicode.com/users');
  }

}