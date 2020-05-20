import { Component, OnInit } from '@angular/core';
import {Person} from '../models/person';
import {PersonService} from '../services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  person: Person;
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }
  onSubmit(person): void {
    this.personService.addPerson(person).subscribe(() => {
      // We only make the call if we subscribe because our service is returning an observable.
      console.log('subbed');
    });
    console.log(person);
  }
}
