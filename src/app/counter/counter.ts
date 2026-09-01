import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  standalone:true
})
export class Counter {

  count:number=0;

  // handleDecrement(){
  //   this.count=this.count-1;
  //   if(this.count<0){
  //     this.count=0;
  //   }
  // }

  // handleReset(){
  //   this.count=0;
  // }

  // handleIncrememt(){
  //   this.count = this.count+1;
  // }

  handleCounter(value:string){
    if(value=="minus"){
      this.count=this.count-1;
    if(this.count<0){
      this.count=0;
    }
  }
  else if(value=="plus"){
    this.count=this.count+1;
  }
  else{
    this.count=0;
  }
}
}
