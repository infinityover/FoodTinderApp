import { Component } from '@angular/core';

import { TimelineLite, Back, Power1, SlowMo, TimelineMax } from 'gsap'
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  menu = new TimelineMax({paused:false, reversed:true});
  formRating = 3;
  constructor( public db: AngularFireDatabase){
    const rest = this.db.list('restaurant').valueChanges().subscribe((resp) => {
      resp.forEach(element => {
        console.log(element)
      });
    });
    // rest.forEach(element => {
    //   console.log(element)
    // });
    
  
  }
  
  ngOnInit(){
    this.createMenuAnim()
  }
  onCreate(){

  }

  createMenuAnim(){
    this.menu.to(".full-card", .25, {ease:"Bounce.easeOut", y:-30},0)
  }
}
