import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JtqConstants } from '../constants/jtq-constants';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

 public getVisitor(loginForm: Login): Observable<any>{
     return this.http.post( JtqConstants.LOGIN_URL, loginForm);
  }
}
