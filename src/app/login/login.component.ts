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
  public token:any;
  
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

    this.token = localStorage.getItem('token')
    console.log(this.token);
    

    if(this.token){
      this.router.navigate(['/users'])
    }
    else {
      this.router.navigate(['/login'])
    }
  }

  onLogin(){
    this.isValid = true;
    if(this.email.valid && this.password.valid)
    this.appService.loginDetails(this.loginData)
    .subscribe(
      (response:any)=>{
        console.log("gggg",response.token);
        localStorage.setItem('token',response.token);
        this.router.navigate(['/users'])
        
      }
    )

  }
}
