import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/service/api-service.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  @ViewChild('updateEmployeeModal') updateEmployeeModal: ElementRef
  userDetails: any;
 
  EmployeeId: any = localStorage.getItem("EmployeeId");
  attachment: any;
  userService: any;
  oneEmployee: boolean;
  employeeData: any=[];
  employeeTaskDetail: any;
  isData: any;
  constructor(
    private api: ApiServiceService,
    private router:Router
   
  ) {
   this.getUser();
 
  }
  updateEmployeeDetail = new FormGroup({
   
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfJoining: new FormControl(''),
    gender: new FormControl(''),
    role: new FormControl(''),
    address: new FormControl(''),
    mobileNumber: new FormControl(''),
    emailId: new FormControl(''),
    dateOfBirth: new FormControl(''),
        employeeId: new FormControl(),
    //attachmentId: new FormControl(''),
  });
  ngOnInit(): void {

  }
 
getUser()
{
  this.api.GetUser(this.EmployeeId).subscribe((data)=>{
    this.userDetails=data;
    console.log(this.userDetails,'user')
}

  )};
  loadEmployeeDetails ()  {
      this.api.getEmployeeDetailsById(this.EmployeeId).subscribe((data: any) => {
        console.log(data,"dadddd")
        this.employeeData = data[0];
      });
    
  }
  getEmployeeDetails(data: any) {
  this.api.getEmpDetailsForEdit(data).subscribe(data => {
    this.attachment = data;
    this.attachment.dateOfBirth = moment(this.attachment.dateOfBirth).format("YYYY-MM-DD");
    this.attachment.dateOfJoining = moment(this.attachment.dateOfJoining).format("YYYY-MM-DD");
    this.updateEmployeeDetail.patchValue(data);
  });
  }
  submit(employeeDetail:any) {
    this.updateEmployeeDetail.controls.employeeId.patchValue(this.attachment.employeeId);
      this.api.updateEmployeeDetails(employeeDetail.value).subscribe((data): any => {
        this.getUser();
        this.updateEmployeeModal.nativeElement.click();
        this.updateEmployeeDetail.reset();
        Swal.fire({
          text: 'Updated Sucessfully!',
          icon: 'success',
          timer: 1000
        });
       
      });
    
    }
  
    deleteEmployeedetails(id: any, uname: any) {
      Swal.fire({
        title: "Are you sure want to delete " + uname + " ?",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.isConfirmed) {
          this.api.deleteUser(id).subscribe(() => {
          
            Swal.fire({
              text: 'Deleted Sucessfully!',
              icon: 'success',
              timer: 1000
            });
     this.getUser();
         
        });
        }
      });
    }
 
}
