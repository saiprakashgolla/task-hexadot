import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
public postForm = "";
public createPost = []
  constructor() { }

  ngOnInit() {
  }
post(){
  if(this.postForm){
    this.createPost.push(this.postForm)
  }
  else{
    return false
  }
  this.postForm = '';
}
}
