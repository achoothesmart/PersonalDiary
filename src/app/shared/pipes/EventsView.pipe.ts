import { Event } from './../../models/Event';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'eventsViewPipe',
  pure: false
})

export class EventsViewPipe implements PipeTransform {
  transform(events: Event[]): any {
    if (!events) {
      return events;
    }
    return events.filter((event) => !event.isDeleted);
  }
}
