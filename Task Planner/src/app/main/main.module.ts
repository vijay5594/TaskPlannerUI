import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { EmployeeModule } from './employee/employee.module';

import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AvatarModule } from 'ngx-avatar';




@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainRoutingModule,
    EmployeeModule,
    AvatarModule,
    EmployeeModule
    
  ]
})
export class MainModule { }
