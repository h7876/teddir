import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.css']
})
export class HomeFeedComponent implements OnInit {
  title = 'no';
  links: string[];

//Need to make this an array, and implement the title with the link. 
  constructor() { 
    this.links = []
  }

  ngOnInit(): void {
  }

  receiveNewLink(event){
    let clone = [...this.links]
    clone.push(event)
    this.links = clone
  }

}
