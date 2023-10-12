import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digital-clock-angular';

  monthsList: any = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  daysList: any = [ "Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  today: any;
  getCurrentHours: any
  getCurrentMinutes : any;
  getCurrentSeconds: any;
  getCurrentDate : any;
  getCurrentday: any;
  getCurrentFullYear: any;
  getCurrentMonth: any;
  getCurrentTime: any;

  isTwelveFormat: boolean = false;
  formatTextValue: any;
  AmOrPm: any;

  ngOnInit() {
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime() {
    
    this.today =  new Date();
    this.getCurrentHours = this.isTwelveFormat ? this.addZero(this.getTimeFormat(this.today.getHours())) : this.addZero(this.today.getHours());
    this.getCurrentMinutes = this.addZero(this.today.getMinutes());
    this.getCurrentSeconds = this.addZero(this.today.getSeconds());
    this.getCurrentDate = this.today.getDate();
    this.getCurrentday = this.daysList[this.today.getDay()];
    this.getCurrentFullYear = this.today.getFullYear();
    this.getCurrentMonth = this.monthsList[this.today.getMonth()];
     
    this.AmOrPm = this.today.getHours() > 12 ? "PM" : "AM"
    this.getCurrentTime = this.getCurrentHours + " : " + this.getCurrentMinutes + " : " + this.getCurrentSeconds
  }

  addZero(i: any) {
    if(i < 10) i = "0" + i;
    return i
  }

  getTimeFormat(currentHours: any) {
    if(currentHours > 12 ) {
      this.getCurrentHours = currentHours - 12;      
    }
    return this.getCurrentHours
  }


}
