import { Component, OnInit } from '@angular/core';
import { Event } from '../models/Event';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  // Globals
  newEvent: Event = new Event(0, '', '', '', '');
  title = '';
  description = '';
  date = '';
  isAllDay = true;
  time = '';
  today: Date;

  constructor(private ds: DataService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    this.today = new Date();

    this.date = this.datePipe.transform(this.today, 'yyyy-MM-dd');
    // alert(this.date);
    this.time = this.datePipe.transform(this.today, 'HH:mm');
  }

  onAddEvent() {
    this.newEvent.id = Date.now();
    this.newEvent.title = this.title;
    this.newEvent.description = this.description;
    this.newEvent.date = this.date;
    if (this.isAllDay) {
      this.newEvent.time = '';
    }
    else {
      this.newEvent.time = this.time;
    }

    if (this.newEvent.isValidEvent()) {
      console.log('adding Event..');

      this.ds.addEvent(this.newEvent);
      this.resetInputs();
      this.router.navigate(['/diary']);
    }
    else {
      alert('Fill all the fields');
    }
    // this.getLatestEvents();
  }

  resetInputs() {
    this.title = '';
    this.description = '';
  }

}
