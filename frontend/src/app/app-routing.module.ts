import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { ShowQueueComponent } from './show-queue/show-queue.component';
import { SignupComponent } from './signup/signup.component';
import { VisitQueueComponent } from './visit-queue/visit-queue.component';

const routes: Routes = [
  {path: 'jumpthequeue/login', component: LoginAndRegisterComponent},
  {path: 'jumpthequeue/join-leave', component: ShowQueueComponent},
  {path: 'jumpthequeue/register', component: SignupComponent},
  {path: 'jumpthequeue/visit-queue/:eventName', component: VisitQueueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
