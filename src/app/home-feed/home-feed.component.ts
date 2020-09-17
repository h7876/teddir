import { Component, OnInit, ViewChild } from '@angular/core';
import {SvgArrowsComponent} from '../svg-arrows/svg-arrows.component'

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.css']
})
export class HomeFeedComponent implements OnInit {
  @ViewChild(SvgArrowsComponent) child: SvgArrowsComponent;
  posts: object[];

  constructor() { 
    this.posts = [{title:'hi', link: 'no', liked:false, dislike:false}]
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
