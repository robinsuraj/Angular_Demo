import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
 @Injectable({
  providedIn: 'root'
})
export class BasicServiceService {

  constructor(private http: HttpClient) { }
  login(data):Observable<any>{
    console.log(data);
    return this.http.post('http://localhost:8088/api/user/logIn/',data);
  }
  signup(data):Observable<any>{
    console.log(data);
    return this.http.post('http://localhost:8088/api/user/userRegistration/',data);
  }
}
