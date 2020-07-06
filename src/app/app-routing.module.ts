import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaryComponent } from './diary/diary.component';
import { TodoComponent } from './todo/todo.component';
import { NewEventComponent } from './new-event/new-event.component';

const routes: Routes = [
  // { path: '', redirectTo: '/diary', pathMatch: 'full' },
  { path: 'diary', component: DiaryComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'newevent', component: NewEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
