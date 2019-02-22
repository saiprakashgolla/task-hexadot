import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.css']
})
export class RegisterTemplateComponent implements OnInit {

  public isValid : boolean = false;

  @ViewChild('email') email: any;
  @ViewChild('password') password: any;

  public userDetails : any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: ''
  }

  constructor(
    public appService : AppService,
    public router : Router
  ) { }

  ngOnInit() {
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onSignup() {
    this.isValid = true;
    if(this.email.valid && this.password.valid && this.userDetails.email && this.userDetails.password && this.userDetails.firstName && this.userDetails.lastName && this.userDetails.mobileNumber)
    this.appService.registerData(this.userDetails)
    .subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/login'])
        
      }
    )
  }

}
