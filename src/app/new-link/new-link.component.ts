import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-new-link',
  templateUrl: './new-link.component.html',
  styleUrls: ['./new-link.component.css']
})
export class NewLinkComponent implements OnInit {
  displayForm: boolean;
  @Output() linkEvent = new EventEmitter<string>();
  @Input() newLink: string;

  constructor() { 
    this.displayForm = false;
    this.newLink = ''
  }

  ngOnInit(): void {
  }
  
  onClickMe(){
    this.displayForm = !this.displayForm;
  }

  addLink(event){
    console.log(event.target.value)
    this.newLink = event.target.value
  }
  sendLink(){
    this.linkEvent.emit(this.newLink)
    this.displayForm = !this.displayForm;
  }
}
