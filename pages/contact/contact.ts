import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  feetHeight: number;
  inchesHeight: number;
  resultRobinson: number;
  resultMiller: number;
  resultHamwi: number;
  resultDevine: number;
  gender: string;

  calculateIWC() {
    if (this.gender = "m") {
      // Robinson formula: 52 kg + 1.9 kg per every inch over 5 feet
      //Miller formula: 56.2 kg + 1.41 kg per every inch over 5 feet
      // Hamwi formula: 48.0 kg + 2.7 kg per every inch over 5 feet
      //Devine formula: 50.0 kg + 2.3 kg per every inch over 5 feet

  	} else if (this.gender= "f") {
      // Robinson formula: 49 kg + 1.7 kg per every inch over 5 feet
      //Miller formula: 53.1 kg + 1.36 kg per every inch over 5 feet
      //Hamwi formula: 45.5 kg + 2.2 kg per every inch over 5 feet
      //Devine formula: 45.5 kg + 2.3 kg per every inch over 5 feet

    } else {
   
    }
  }
  constructor(public navCtrl: NavController) {

  }

}
