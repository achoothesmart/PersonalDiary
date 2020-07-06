import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { DiaryComponent } from './diary/diary.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { DataService } from './data.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NewEventComponent } from './new-event/new-event.component';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    TodoComponent,
    TodoItemComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'personal-diary-ats'),
    AngularFireDatabaseModule
  ],
  providers: [
    DataService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
