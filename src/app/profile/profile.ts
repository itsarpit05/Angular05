import { getLocaleMonthNames } from "@angular/common";
import { Component } from "@angular/core";


@Component({

    selector : 'app-profile',
    templateUrl: './profile.html',
    styleUrl:'./profile.css',
    standalone:true


})

export class Profile{
    

    

    handleClick(){
        console.log("Clicked functionality");
        this.anotherhandleClick();
        
    }

    anotherhandleClick(){
        console.log("another functionality inside handleClick()");
        
    }
}