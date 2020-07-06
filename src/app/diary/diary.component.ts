import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
// import { AngularFireList } from 'angularfire2/database';
import { Event } from '../models/Event';
import { EventView } from '../models/EventView';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  // diary = ['Hello World!', 'Welcome to Personal Diary', 'Developed by Prasanna Ashok'];
  events: Event[];
  eventViewItems: EventView[];
  eventViewItem: EventView;
  // newEvent: Event = new Event('', '', '');
  // title = '';
  // description = '';
  loading = '';
  canDelete: boolean;

  constructor(private ds: DataService ) {
    this.loading = 'Loading...';
    // ds.getEvents().then((events: Event[]) => {
    //   this.events = events;
    //   this.loading = '';
    // });
    this.getLatestEvents(false);
  }

  ngOnInit() {
    this.getLatestEvents();
  }

  getLatestEvents(force: boolean = true) {
    this.ds.getEvents(force).then((events: Event[]) => {
      this.events = events;
      if (this.events.length > 0) {
        this.loading = '';
        // this.loadEventViewItems();
      }
      else{
        this.loading = 'No Events in Diary';
      }
    });
  }

  onEventClick(eventId) {
    console.log(eventId);
  }

  // loadEventViewItems() {
  //   this.eventViewItems = [];
  //   this.events.forEach(event => {
  //     this.eventViewItem
  //   });
  // }

  deleteAllEvents() {
    if (this.events.length <= 0) {
      return;
    }
    this.canDelete = confirm('Do you want to delete all the Events from Diary?');
    if (this.canDelete) {
      this.ds.deleteAllEvents();
      this.getLatestEvents();
    }
  }

  // resetInputs() {
  //   this.title = '';
  //   this.description = '';
  // }

}
