import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'Employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
      { path: '', redirectTo: 'Employee', pathMatch: 'full' },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
