import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-date-tracker',
  templateUrl: 'date-tracker.html',
  inputs: ['myDate']

})

export class DateTrackerPage {
  myDate: any;
  currentDate: any;
  resultDate: number;

//ISO 8601 Datetime Format: YYYY-MM-DDTHH:mmZ

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
      function calculateTimeLeft(selectedDate){
        let date = selectedDate;
        let currentDate = new Date();
        console.log('selected Date ====>', selectedDate)
        
        return Math.floor((date - this.currentDate) / (1000*60*60*24));
      }












      // let _MS_PER_DAY = 1000 * 60 * 60 * 24;

      // // Calculate time from current to set releaseDate
      // (function countdown() {
      //     var utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
      //     var utc2 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
      //     let t = Math.floor((utc2 - utc1) / _MS_PER_DAY);

      //     var days, hours, minutes, seconds;
      //     days = Math.floor(t / 86400);
      //     t -= days * 86400;
      //     hours = Math.floor(t / 3600) % 24;
      //     t -= hours * 3600;
      //     minutes = Math.floor(t / 60) % 60;
      //     t -= minutes * 60;
      //     seconds = t % 60;
      //     return [days + 'd', hours + 'h', minutes + 'm', seconds + 's'].join(' ');

      //     }).call(this);

  }


}
