import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  feetHeight: number;
  inchesHeight: number;
  iwcResult: number;
  gender: string;

  calculateIWC() {
    if (this.gender = "m") {
   
  	} else if (this.gender= "f") {
   
    } else {
   
    }
  }
  constructor(public navCtrl: NavController) {

  }

}
