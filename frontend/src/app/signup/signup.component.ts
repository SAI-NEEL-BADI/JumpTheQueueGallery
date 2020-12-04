import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterVisitor } from '../models/register-visitor';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private registerService: RegisterService) { }
// tslint:disable-next-line: new-parens
registerForm: RegisterVisitor = new RegisterVisitor;
msg: string;
errorMsg: string;
  ngOnInit(): void {
  }
  signIn(){
    this.router.navigateByUrl('/jumpthequeue/login');
  }
  registerVisitor(){
    this.registerForm.userType = true;
    this.registerService.saveVisitor(this.registerForm).subscribe(data => {
      this.msg = data;
      this.router.navigateByUrl('/jumpthequeue/login');
    });
  }

}
