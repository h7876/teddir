import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.css']
})
export class HomeFeedComponent implements OnInit {
  
  posts: object[];

  constructor() { 
    this.posts = []
  }

  ngOnInit(): void {
  }

  receiveNewLink(event){
    let clone = [...this.posts]
    clone.push(event[event.length-1])
    this.posts = clone
    console.log(this.posts)
  }

}
