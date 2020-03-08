import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Person} from '../models/person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiUrl = 'http://localhost:8080/people';
  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<Person[]>(this.apiUrl);
  }
}
