import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


import { EmployeeComponent } from './employee.component';


const routes: Routes = [
  {
    path: '', component: EmployeeComponent,
    children: [
      { path: 'addUser', component: AdduserComponent },
      { path: 'EmployeeDetails', component: EmployeeDetailsComponent },
      { path: ' ', redirectTo: 'EmployeeDetails', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
