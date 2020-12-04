import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterVisitor } from '../models/register-visitor';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public saveVisitor(registerForm: RegisterVisitor): Observable<any>{
      return this.http.post('http://localhost:8081/jumpthequeue/services/rest/visitormanagement/v1/visitor/', registerForm);
   }
}
