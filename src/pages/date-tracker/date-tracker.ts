import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'page-date-tracker',
  templateUrl: 'date-tracker.html',
  inputs: ['myDate', 'resultDate'],
  
})

export class DateTrackerPage {
  public myDate: String = new Date().toISOString();
  public resultDate: number;
  public currentDate: String;
  // private tick: number;

//ISO 8601 Datetime Format: YYYY-MM-DDTHH:mmZ

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.currentDate = (new Date()).toISOString();
      let resultDate = this.calculateTimeLeft();
      // let timer = TimerObservable.create(2000, 1000).subscribe(t => { this.resultDate = t; });
    }

  calculateTimeLeft() {
    let myDateInstance = new Date(this.myDate.substring(0, 10)).getTime();
    let dateInstance = new Date().getTime();
    console.log( myDateInstance);
    console.log( dateInstance);
    
    // let resultDate = Math.floor((myDateInstance - dateInstance) / (1000*60*60*24));
    let resultDate = Math.floor(myDateInstance - dateInstance);
    console.log(resultDate);
    // convert resultDate # of Days till release to a time format with #Months, #Days, #Hours, #Minutes, #Seconds
    return resultDate;
  }


  getSecondsAsDigitalClock(resultDate: number) {
        var sec_num = parseInt(resultDate.toString(), 10); // don't forget the second param
        var days = Math.floor(sec_num / 30)
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var dayString = '';
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        dayString = (hours < 10) ? "0" + days : days.toString();
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
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