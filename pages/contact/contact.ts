import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-contact",
  templateUrl: "contact.html",
  styleUrls: ['contact.css']
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
  tooLow: string;
  
  calculateIWC() {
    if ((this.feetHeight<5)){
      this.tooLow = "The calculations are only accurate for those who are at least 5 ft tall.";
    }else if ((this.gender = "m")) {
       this.calcNum = ((this.feetHeight - 5) * 12) + this.inchesHeight;
      if (this.feetHeight < 5) {
        this.resultRobinson = 52.0;
        this.resultMiller = 56.2;
        this.resultHamwi = 48.0;
        this.resultDevine = 50.0;
      } else {
        // Robinson formula: 52 kg + 1.9 kg per every inch over 5 feet
        this.resultRobinson = 52 + (1.9 * this.calcNum);
        //Miller formula: 56.2 kg + 1.41 kg per every inch over 5 feet
        this.resultMiller = 56.2 + (1.41 * this.calcNum);
        // Hamwi formula: 48.0 kg + 2.7 kg per every inch over 5 feet
        this.resultHamwi = 48.0 + (2.7 * this.calcNum);
        //Devine formula: 50.0 kg + 2.3 kg per every inch over 5 feet
        this.resultDevine = 50.0 + (2.3 * this.calcNum);
      }
    }else if ((this.gender = "f")) {
       this.calcNum = ((this.feetHeight - 5) * 12) + this.inchesHeight;
      if (this.feetHeight <= 5) {
        this.resultRobinson = 49.0;
        this.resultMiller = 53.1;
        this.resultHamwi = 45.5;
        this.resultDevine = 45.5;
      } else {
        // Robinson formula: 49 kg + 1.7 kg per every inch over 5 feet
        this.resultRobinson = 49.0 + (1.7 * this.calcNum);
        //Miller formula: 53.1 kg + 1.36 kg per every inch over 5 feet
        this.resultMiller = 53.1 + (1.36 * this.calcNum);
        //Hamwi formula: 45.5 kg + 2.2 kg per every inch over 5 feet
        this.resultHamwi = 45.5 + (2.2 * this.calcNum);
        //Devine formula: 45.5 kg + 2.3 kg per every inch over 5 feet
        this.resultDevine = 45.5 + (2.3 * this.calcNum);
      }
    }
  }
  constructor(public navCtrl: NavController) {}
}
