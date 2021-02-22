import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 value: number = 12030;
 value1: number = 15030;
  options: Options = {
    floor: 0,
    ceil: 40000
  };
  enable:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onKey(event: number) { // without type info
    this.value = event.target.value;
  }
   onKey1(event: number) { // without type info
    this.value1 = event.target.value;
  }
  OnChange(event:boolean){
    console.log(event)
    this.enable=event
  }

}
