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
import { MatPlaygroundComponent } from './mat-playground/mat-playground.component';
import { MatChipComponent } from './material-design/mat-chip/mat-chip.component';
import { MatRadiobuttonComponent } from './material-design/mat-radiobutton/mat-radiobutton.component';
import { MatSelectComponent } from './material-design/mat-select/mat-select.component';
import { MatAutocompleteComponent } from './material-design/mat-autocomplete/mat-autocomplete.component';
import { InputTestComponent } from './input-test/input-test.component';
import { NgDirectivesComponent } from './ng-directives/ng-directives.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    TodoComponent,
    PersonDetailComponent,
    PersonFormReactiveComponent,
    MatPlaygroundComponent,
    MatChipComponent,
    MatRadiobuttonComponent,
    MatSelectComponent,
    MatAutocompleteComponent,
    InputTestComponent,
    NgDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [PersonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
