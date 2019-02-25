import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public token:any;
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token')
    console.log(this.token);
  
    
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);

  }

}
