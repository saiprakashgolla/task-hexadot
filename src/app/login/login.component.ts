import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isValid:boolean = false;

  @ViewChild('email') email: any;
  @ViewChild('password') password: any;

  public loginData:any={
    email:'',
    password:''
  }
  constructor(
    private router : Router,
    public appService : AppService
  ) { }

  ngOnInit() {
  }

  onLogin(){
    this.isValid = true;
    if(this.email.valid && this.password.valid)
    this.appService.loginDetails(this.loginData)
    .subscribe(
      (response)=>{
        console.log("gggg",response);
        this.router.navigate(['/users'])
        
      }
    )

  }
}
