import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Person} from '../models/person';
import {PersonService} from "../services/person.service";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  @Input() person: Person;
  @Output() eventEmitter = new EventEmitter<boolean>();


  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  onDelete(person: Person): void {
    this.personService.deletePerson(person).subscribe(() => {
      this.eventEmitter.emit(true);
    });
  }
}
