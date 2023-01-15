import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiServiceService } from 'src/app/service/api-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
 


  userDetails: any;

  

  constructor(private api: ApiServiceService,private router:Router) {}

 employeeDetail = new FormGroup({
   
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfJoining: new FormControl(''),
    gender: new FormControl(''),
    role: new FormControl(''),
    address: new FormControl(''),
    mobileNumber: new FormControl(''),
    emailId: new FormControl(''),
    dateOfBirth: new FormControl(''),
    //attachmentId: new FormControl(''),
  });


  ngOnInit(): void {
  }
 

  thisFormValid(): boolean {
    if (this.employeeDetail.invalid) return true;
    return false;
  }
 
  addUser(params:any) {
    this.api.adduser(params).subscribe((data: any) => {
      this.userDetails = data
      Swal.fire({
        text: ' Added Sucessfully!',
        icon: 'success',
        timer: 1000
      });
      this.employeeDetail.reset();
      this.router.navigate(['./Employee/EmployeeDetails']);
    });
  
}}



