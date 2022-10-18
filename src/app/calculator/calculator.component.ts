import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

 excute: string;
 rs: number;
  fontSize = 40;

  result(excute: string){
   this.rs = eval(excute);
 }
  changeFontSizeValue(fontSize: any) {
    this.fontSize = fontSize;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
