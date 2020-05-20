import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {PersonService} from "../services/person.service";

@Component({
  selector: 'app-person-form-reactive',
  templateUrl: './person-form-reactive.component.html',
  styleUrls: ['./person-form-reactive.component.scss']
})
export class PersonFormReactiveComponent implements OnInit {
  form: FormGroup;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
        firstName: new FormControl('Default', Validators.compose([
          Validators.pattern('^^[a-zA-Z_]*$'),
          Validators.required,
          ])),
        lastName: new FormControl('Default', Validators.pattern('^^[a-zA-Z_]*$')),
        age: new FormControl('1'),
      }
    );
  }

  onSubmit(person): void {
    this.personService.addPerson(person).subscribe(() => {
      // We only make the call if we subscribe because our service is returning an observable.
      console.log('subbed');
    });
    console.log(person);
  }

}
