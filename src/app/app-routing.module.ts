import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {PeopleComponent} from './people/people.component';
import {PersonFormComponent} from './person-form/person-form.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  {path: 'people/createPerson', component: PersonFormComponent},
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
