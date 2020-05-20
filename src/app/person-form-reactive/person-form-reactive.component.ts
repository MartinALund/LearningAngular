import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {PersonService} from '../services/person.service';

@Component({
  selector: 'app-person-form-reactive',
  templateUrl: './person-form-reactive.component.html',
  styleUrls: ['./person-form-reactive.component.scss']
})
export class PersonFormReactiveComponent implements OnInit {
  form: FormGroup;

  constructor(private personService: PersonService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        firstName: this.formBuilder.control('', Validators.compose([
          Validators.pattern('^^[a-zA-Z_]*$'),
          Validators.required,
          ])),
        lastName: this.formBuilder.control('', Validators.pattern('^^[a-zA-Z_]*$')),
        age: this.formBuilder.control('1'),
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
