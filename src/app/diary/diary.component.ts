import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
// import { AngularFireList } from 'angularfire2/database';
import { Event } from '../models/Event';
import { EventView } from '../models/EventView';
import { ModalPopup } from '../models/ModalPopup';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  // diary = ['Hello World!', 'Welcome to Personal Diary', 'Developed by Prasanna Ashok'];
  events: Event[];
  selectedEventId: number;
  eventViewItems: EventView[];
  eventViewItem: EventView;

  loading = '';
  canDelete: boolean;
  commonModal: ModalPopup;

  constructor(private ds: DataService) {
    this.loading = 'Loading...';
    this.getLatestEvents(false);
  }

  ngOnInit() {
    this.getLatestEvents();
    this.commonModal = new ModalPopup('Sample Modal', 'Test', 'Ok', 'Cancel');
  }

  // Event Triggers
  onEventClick(eventId) {
    this.selectedEventId = eventId;
  }

  onDeleteClick(id) {
    console.log(id);
    this.selectedEventId = id;
    this.commonModal = new ModalPopup(
      'Delete', 'Do you want to delete this event', 'Confirm Delete', 'Cancel'
    );

    this.commonModal.resultCommand = 'DELETE';
  }

  // onDeleteAllClick() {
  //   this.commonModal = new ModalPopup(
  //     'Delete All', 'Do you want to delete all ' + this.events.length + ' events?', 'Confirm Delete All', 'Cancel'
  //   );
  //   this.commonModal.resultCommand = 'DELETEALL';
  // }

  // Support functions
  getLatestEvents(force: boolean = true) {
    this.ds.getEvents(force).then((events: Event[]) => {
      this.events = events;
      if (this.events.length > 0) {
        this.loading = '';
      }
      else {
        this.loading = 'No Events in Diary';
      }
    });
  }

  deleteEvent(id): any {
    console.log('...deleting event id ' + id);
    this.events.filter((event)=>{
      return event.id === id;
    })[0].isDeleted = true;
  }

  // deleteAllEvents() {
  //   if (this.events.length <= 0) {
  //     return;
  //   }
  //   this.ds.deleteAllEvents();
  //   this.getLatestEvents();
  // }

  modalConfirm() {
    switch (this.commonModal.resultCommand) {
      case 'DELETE':
        this.deleteEvent(this.selectedEventId);
        break;
      // case 'DELETEALL':
      //   this.deleteAllEvents();
      //   break;
      case '':
        console.log('nothing');
        break;
    }
    this.commonModal.resultCommand = '';
  }

  modalCancel(){
    this.commonModal.resultCommand = '';
  }
}


