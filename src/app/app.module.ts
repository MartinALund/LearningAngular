import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './shared/material.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonFormReactiveComponent } from './person-form-reactive/person-form-reactive.component';
import {PersonService} from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    TodoComponent,
    PersonDetailComponent,
    PersonFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [PersonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
