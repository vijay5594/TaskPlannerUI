import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
    
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
