import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.css']
})
export class HomeFeedComponent implements OnInit {
  links: string[];

  constructor() { 
    this.links = ['Link 1', 'Link 2', 'Link 3', 'Link 4']
  }

  ngOnInit(): void {
  }

}
