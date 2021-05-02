import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-contact",
  templateUrl: "contact.html",
  styleUrls: ['contact.css']
})
export class ContactPage {
  feetHeight: string;
  inchesHeight: string;
  calcNum: number;
  resultRobinson: number;
  resultMiller: number;
  resultHamwi: number;
  resultDevine: number;
  feetConvert: number
  subtract: number;
  gender: string;
  tooLow: string;
  
  calculateIWC() {
    this.subtract = 5*12;
    this.feetConvert = parseInt(this.feetHeight)*12;
    if ((parseInt(this.feetHeight)<5)){
      this.tooLow = "The calculations are only accurate for those who are at least 5 ft tall.";
    }else if ((parseInt(this.feetHeight)>7)){
      this.tooLow = "Are you sure? The tallest person in the world, Robert Wadlow, is 8 feet and 11.1 inches";
    }else if ((this.gender = "m")) {
       this.calcNum =parseInt(this.inchesHeight) + (this.feetConvert - this.subtract) ;
        // Robinson formula: 52 kg + 1.9 kg per every inch over 5 feet 
        this.resultRobinson =parseFloat(52 + (1.9 * this.calcNum).toFixed(2)) ;
        //Miller formula: 56.2 kg + 1.41 kg per every inch over 5 feet
        this.resultMiller =parseFloat(56.2 + (1.41 * this.calcNum).toFixed()) ;
        // Hamwi formula: 48.0 kg + 2.7 kg per every inch over 5 feet
        this.resultHamwi =parseFloat(48.0 + (2.7 * this.calcNum).toFixed());
        //Devine formula: 50.0 kg + 2.3 kg per every inch over 5 feet
        this.resultDevine =parseFloat( 50.0 + (2.3 * this.calcNum).toFixed());
        this.tooLow = `${this.calcNum}`;
    }else if ((this.gender = "f")) {
      this.calcNum =parseInt(this.inchesHeight) + (this.feetConvert - this.subtract) ;
        // Robinson formula: 49 kg + 1.7 kg per every inch over 5 feet parseFloat(.toFixed())
        this.resultRobinson =parseFloat(49.0 + (1.7 * this.calcNum).toFixed()) ;
        //Miller formula: 53.1 kg + 1.36 kg per every inch over 5 feet
        this.resultMiller =parseFloat(53.1 + (1.36 * this.calcNum).toFixed());
        //Hamwi formula: 45.5 kg + 2.2 kg per every inch over 5 feet
        this.resultHamwi =parseFloat(45.5 + (2.2 * this.calcNum).toFixed()) ;
        //Devine formula: 45.5 kg + 2.3 kg per every inch over 5 feet
        this.resultDevine =parseFloat(45.5 + (2.3 * this.calcNum).toFixed());
        this.tooLow = `${this.calcNum}`;
    }
  }
  constructor(public navCtrl: NavController) {}
}
