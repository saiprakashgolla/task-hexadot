import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
public users:any;
public p:any;
public total:any;
public usersPerPage:any = {
  size: 3
}
  constructor(
    public appService:AppService,
    public router: Router
  ) { }

  ngOnInit() {
    this.p = 1;
    this.getUsers();
  }

  getUsers(){
    var data = {
      page: this.p,
      per_page: this.usersPerPage.size
    }
    this.appService.usersList(data)
    .subscribe(
      (response:any)=>{
        this.users = response.data;
        this.total = response.total;
        console.log(this.total);
        
      }
    )
  }
  pageChanged(event){
    console.log(event);
    this.p = event;
    this.router.navigate(["/users/"+this.p]);
    this.getUsers();
  
  }

}
