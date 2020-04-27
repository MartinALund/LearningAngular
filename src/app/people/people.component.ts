import { Component, OnInit } from '@angular/core';
import {PersonService} from '../services/person.service';
import {Person} from '../models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: Person[];
  title = 'Tour of People';
  selectedPerson: Person;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.personService.getPeople().subscribe((data: Person[]) => {
      this.people = data;
    });
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
}
