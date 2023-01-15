import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { UserManagementModule } from './user-management/user.module';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ngx-drag-drop';
import { EmployeeModule } from './main/employee/employee.module';



@NgModule({
  declarations: [
    AppComponent,
   

  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    MainModule,
    DndModule,
   EmployeeModule,
    UserManagementModule,
   

  ],


  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }