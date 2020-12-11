import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JtqConstants } from '../constants/jtq-constants';
import { RegisterVisitor } from '../models/register-visitor';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  public saveVisitor(registerForm: RegisterVisitor): Observable<any> {
    return this.http.post(JtqConstants.SIGN_UP_URL, registerForm);
  }
}
