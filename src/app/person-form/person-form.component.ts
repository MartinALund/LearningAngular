import { Component, OnInit } from '@angular/core';
import {Person} from '../models/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
