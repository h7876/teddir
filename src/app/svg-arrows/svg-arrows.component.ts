import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-arrows',
  templateUrl: './svg-arrows.component.svg',
  styleUrls: ['./svg-arrows.component.css']
})
export class SvgArrowsComponent  {

  liked = false
  disliked = false
  fillColorUpArrow = 'black'
  fillColorDownArrow = 'black'

  changeColorUpArrow() {
    if (this.liked == false && this.disliked == false) {
      this.fillColorUpArrow = "#f49053"
      this.liked = true
    }
    else if (this.liked == true && this.disliked == false) {
      this.fillColorUpArrow = "black"
      this.liked = false
    }
    else if (this.liked == false && this.disliked == true){
      this.fillColorDownArrow = "black"
      this.fillColorUpArrow = "#f49053"
      this.liked = true
      this.disliked = false
    }
  }
  changeColorDownArrow() {
    if (this.disliked == false && this.liked == false) {
      this.fillColorDownArrow = "#6A88F9"
      this.disliked = true
      this.fillColorUpArrow = "black"
    }
    else if (this.disliked == true && this.liked == false) {
      this.fillColorDownArrow = "black"
      this.disliked = false
    }
    else if (this.disliked == false && this.liked == true){
      this.fillColorUpArrow = "black"
      this.fillColorDownArrow = "#6A88F9"
      this.disliked = true
      this.liked = false
    }
  }
}
