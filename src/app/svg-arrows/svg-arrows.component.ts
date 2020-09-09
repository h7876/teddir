import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-arrows',
  templateUrl: './svg-arrows.component.svg',
  styleUrls: ['./svg-arrows.component.css']
})
export class SvgArrowsComponent  {

  liked = false
  fillColor = 'black'

  changeColor() {
    if (this.liked == false) {
      this.fillColor = "#f49053"
      this.liked = true;
    }
    else if (this.liked == true) {
      this.fillColor = "black"
      this.liked = false;
    }
  }
}
