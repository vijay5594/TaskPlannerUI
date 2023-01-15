import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


URL = 'https://localhost:5001/api/';

 addUser=this.URL+"Employee/AddEmployee";
 getUser=this.URL+"Employee/GetUser?data=";
 uploadFile = this.URL + 'FileAttachment/Attachment';
 dologin = this.URL + 'Login/Login';
 addUserCredentials = this.URL + 'Login/AddUser';
 editUserCredentials = this.URL + 'Login/EditLogin';
 resetPassword = this.URL + 'Login/ForgotPassword?Data=';
 updateEmployeeDetail = this.URL + 'Employee/Update';
 GetEmpDetailsForEdit = this.URL + 'Employee/getIndividualEmployeeDetailsById?id=';
 getEmployeeDetailById = this.URL + 'Employee/GetEmployeeDetailsById?id=';
 deleteEmployee = this.URL + "Employee/DeleteEmployee?Id=";
 
  constructor(private http: HttpClient) { }

  adduser(params:any) {
    return this.http.post(this.addUser,params)
  }

  GetUser(id: any) {
    return this.http.get(this.getUser + id)
  }
  uploadFileAttachment(params: any) {
    return this.http.post(this.uploadFile, params);
  } 


  getLogin(params: any) {
    return this.http.post(this.dologin, params)
  }
  editUser(params: any) {
    return this.http.post(this.editUserCredentials, params)
  }

  ResetPassword(params: string) {
    return this.http.get(this.resetPassword + params);
  }
  updateEmployeeDetails(paramas: any) {
    return this.http.put(this.updateEmployeeDetail, paramas);
  }
  getEmpDetailsForEdit(id: number) {
    return this.http.get(this.GetEmpDetailsForEdit + id)
  }
  getEmployeeDetailsById(params: string) {
    return this.http.get(this.getEmployeeDetailById + params);
  }
  deleteUser(id: any) {
    return this.http.delete(this.deleteEmployee + id)
  }
}