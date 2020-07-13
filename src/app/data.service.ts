import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Event } from './models/Event';
@Injectable({
  providedIn: 'root'
})



export class DataService {
  // events1: AngularFireList<Event[]>;
  events: Event[];
  eventsLoaded: boolean;

  constructor(public af: AngularFireDatabase) {
    this.eventsLoaded = false;
  }

  getEvents(latest: boolean = false) {
    return new Promise(resolve => {
      if ( latest || !this.eventsLoaded ) {
        this.af.list<any>('events').valueChanges().subscribe((events: any[]) => {
          this.events = events;
          this.eventsLoaded = true;
          resolve(events);
        });
      } else {
        resolve(this.events);
      }
    });
  }

  addEvent(event: Event) {
    this.af.list<Event>('events').push(event);
  }

  deleteAllEvents() {
    // this.af.list<Event>('events').remove();
  }
}
