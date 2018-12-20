import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAboutShow :boolean = false
  rotateArrow : boolean = false
  constructor(public navCtrl: NavController) {

  }
  showAbout(){
      this.isAboutShow = ! this.isAboutShow
      this.rotateArrow = ! this.rotateArrow
  }

}
