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
  onSignIn(googleUser) {
    console.log(googleUser);
    this.router.navigate(['/users'])
    var profile = googleUser.getBasicProfile();
    console.log(profile);
    
    console.log('ID: ' + profile.getId());
    console.log(profile.getId());
     // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  googleApi(data){
   console.log("signIn",data);

  }
  
}
