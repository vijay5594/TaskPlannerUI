import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isEmployee: boolean = true;
  showNavContent: boolean;
  isNavOpen: boolean = true;
  step: any;
  loggerName: string;
  loggerRole: string;
  notify:any;
  
  customStyle = {
    objectFit: "cover"
  };
  userService: any;
  isSuperUser: boolean;
  EmployeeId: string = localStorage.getItem('EmployeeId')
  constructor(public router: Router) {
    this.step = 'step1'
   
    
  }




  openNav() {
    let sidenav = document.getElementById("sideNav");
    let main = document.getElementById("main");

    if (window.innerWidth < 600) {
      console.log(window.innerWidth, "widhth")
      if (this.showNavContent == false) {
        sidenav.style.width = "0px";
        main.style.marginLeft = "0px";
        this.showNavContent = true;
        console.log(this.showNavContent, "to hide")
      }
      else {
        sidenav.style.width = "60px";
        main.style.marginLeft = "60px";
        this.showNavContent = false;
        console.log(this.showNavContent, "for shpow")
      }
    }
    else {
      if (this.showNavContent == false) {
        sidenav.style.width = "60px";
        main.style.marginLeft = "60px";
        this.isNavOpen = true;
        this.showNavContent = true;
      }
      else {
        sidenav.style.width = "250px";
        main.style.marginLeft = "250px";
        this.isNavOpen = false;
        this.showNavContent = false;
      }
    }
  }

  shortNav() {

    let sidenav = document.getElementById("sideNav");
    let main = document.getElementById("main");

    if (window.innerWidth < 600) {
      sidenav.style.width = "0px";
      main.style.marginLeft = "0px";
      this.isNavOpen = true;
      this.showNavContent = true;
    }

    else {
      sidenav.style.width = "60px";
      main.style.marginLeft = "60px";
      this.isNavOpen = true;
      this.showNavContent = true;
    }
  }
  logout = () => {
    Swal.fire({
      title: "Are you sure want to Logout ?",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'LogOut'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['./login']);
      }
    });
  }
}