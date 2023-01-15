import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  employeeId: any;
  attendanceId: any;
  _role: any;
  

  constructor() { }


  isValid = () => {
    const user = localStorage.getItem('userName');
    if (!user) {
      return false;
    }
    return true;
  }

  get EmployeeId(): any {
    return this.employeeId;
  }

  

  set EmployeeId(id: any) {
    localStorage.setItem('EmployeeId', id);
    this.employeeId = id;
  }
  
  get Role(): any {
    return localStorage.getItem('Role');
  }
  set Role(role: any) {
    localStorage.setItem('Role', role);
    this._role = role;
  }
  setEmployeeId(params: any) {
    this.employeeId = params;
  }
  getEmployeeId(): any {
    return this.employeeId;
  }
  getRole(): boolean {
    if (this.Role == 'Admin' || this.Role == 'Manager') return true;
    return false;
  }
  getAdminOnlyRole(): boolean {
    if (this.Role == 'Admin') return true;
    return false;
  }
  getEmpOnlyRole(): boolean {
    if (this.Role == 'Employee') return true;
    return false;
  }
}