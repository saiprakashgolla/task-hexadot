import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email : any;
  public password : any ;
  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
  }
  login(){
    if(!this.email){
      alert("Please Provide Email");
    }else if(!this.password){
      alert("Please Provide Password");
    }else{

        this.router.navigate(['/create-post'])
     
    }
  }
}
