import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-link',
  templateUrl: './new-link.component.html',
  styleUrls: ['./new-link.component.css']
})
export class NewLinkComponent implements OnInit {
  displayForm: boolean;
    
  constructor() { 
    this.displayForm = false;
  }

  ngOnInit(): void {
  }
  
  onClickMe(){
    this.displayForm = !this.displayForm;
  }
}
