import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoItems = [
    { text: 'Test Item 1', completed: true},
    { text: 'Test Item 2', completed: false},
    { text: 'Test Item 3', completed: true}
  ];

  constructor() { }

  ngOnInit() {
  }

}
