import { Component } from '@angular/core';

import { TimelineLite, Back, Power1, SlowMo, TimelineMax } from 'gsap'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  menu = new TimelineMax({paused:false, reversed:true});
  formRating = 3;
  ngOnInit(){
    this.createMenuAnim()
  }
  onCreate(){

  }

  createMenuAnim(){
    this.menu.to(".full-card", .25, {ease:"Bounce.easeOut", y:-30},0)
  }
}
