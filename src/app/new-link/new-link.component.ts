import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-new-link',
  templateUrl: './new-link.component.html',
  styleUrls: ['./new-link.component.css']
})
export class NewLinkComponent implements OnInit {
  displayForm: boolean;
  @Output() linkEvent = new EventEmitter<object[]>();
  newLink: object[]=[];
  @Input() link: string;
  @Input() title: string;
  liked: boolean;
  disliked: boolean;

  constructor() { 
    this.displayForm = false
    this.newLink = []
    this.link = ''
    this.title = ''
    this.liked = false
    this.disliked = false
  }

  ngOnInit(): void {
  }
  
  onClickMe(){
    this.displayForm = !this.displayForm;
  }

  addLink(event){
    console.log(event.target.value)
    this.link = event.target.value
  }
  addTitle(event){
    console.log(event.target.value)
    this.title = event.target.value
  }

  sendLink(){
    let newLinkObj = {
      link:this.link,
      title: this.title,
      liked: this.liked,
      disliked: this.disliked
    }
    this.newLink.push(newLinkObj)
    this.linkEvent.emit(this.newLink)
    this.displayForm = !this.displayForm;
  }
}
