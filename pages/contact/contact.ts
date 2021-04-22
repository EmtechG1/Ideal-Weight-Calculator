import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  feetHeight: number;
  inchesHeight: number;
  calcNum: number;
  resultRobinson: number;
  resultMiller: number;
  resultHamwi: number;
  resultDevine: number;
  gender: string;
  deci: number;

  calculateIWC() {
    this.calcNum = ((this.feetHeight-5)*12)+this.inchesHeight;
    if (this.gender = "m") {
      if (this.feetHeight <= 5){
        this.resultRobinson = parseFloat(52.0.toFixed(this.deci));
        this.resultMiller = parseFloat(56.2.toFixed(this.deci));
        this.resultHamwi = parseFloat(48.0.toFixed(this.deci));
        this.resultDevine = parseFloat(50.0.toFixed(this.deci));
      } else{
        // Robinson formula: 52 kg + 1.9 kg per every inch over 5 feet
        this.resultRobinson = parseFloat(52 + (1.9*this.calcNum).toFixed(this.deci));
        //Miller formula: 56.2 kg + 1.41 kg per every inch over 5 feet
        this.resultMiller = parseFloat(56.2 + (1.41*this.calcNum).toFixed(this.deci));
        // Hamwi formula: 48.0 kg + 2.7 kg per every inch over 5 feet
        this.resultHamwi = parseFloat(48.0 + (2.7*this.calcNum).toFixed(this.deci));
        //Devine formula: 50.0 kg + 2.3 kg per every inch over 5 feet
        this.resultDevine = parseFloat(50.0 + (2.3*this.calcNum).toFixed(this.deci));
      }
      

  	} else if (this.gender= "f") {
      if (this.feetHeight <= 5){
        this.resultRobinson = parseFloat(49.0.toFixed(this.deci));
        this.resultMiller = parseFloat(53.1.toFixed(this.deci));
        this.resultHamwi = parseFloat(45.5.toFixed(this.deci));
        this.resultDevine = parseFloat(45.5.toFixed(this.deci));
      } else{
        // Robinson formula: 49 kg + 1.7 kg per every inch over 5 feet
        this.resultRobinson = parseFloat(49.0 + (1.7*this.calcNum).toFixed(this.deci));
        //Miller formula: 53.1 kg + 1.36 kg per every inch over 5 feet
        this.resultMiller = parseFloat(53.1 + (1.36*this.calcNum).toFixed(this.deci));
        //Hamwi formula: 45.5 kg + 2.2 kg per every inch over 5 feet
        this.resultHamwi = parseFloat(45.5 + (2.2*this.calcNum).toFixed(this.deci));
        //Devine formula: 45.5 kg + 2.3 kg per every inch over 5 feet
        this.resultDevine = parseFloat(45.5 + (2.3*this.calcNum).toFixed(this.deci));
      }
      
    }
  }
  constructor(public navCtrl: NavController) {

  }

}
