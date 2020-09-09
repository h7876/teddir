import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.css']
})
export class HomeFeedComponent implements OnInit {
  
  posts: object[];

  constructor() { 
    this.posts = [{title:'hi', link: 'no', liked:false}]
  }

  ngOnInit(): void {
  }

  receiveNewLink(event){
    let clone = [...this.posts]
    clone.push(event[event.length-1])
    this.posts = clone
    console.log(this.posts)
  }
   upArrow(i) {
    console.log(i)
    if(this.posts[i]['liked'] == false){
      document.getElementById(`${i}`).style.fill = "red";
      this.posts[i]['liked'] = true;
    }
       else if(this.posts[i]['liked'] == true){
      document.getElementById(`${i}`).style.fill = "black";
      this.posts[i]['liked'] = false;
    }
    else {
      alert(this.posts)
    }
    
}
}
