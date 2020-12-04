import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

 public getVisitor(loginForm: Login): Observable<any>{
     return this.http.post('http://localhost:8081/jumpthequeue/services/rest/visitormanagement/v1/visitor/search', loginForm);
  }
}
