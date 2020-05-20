import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Person} from '../models/person';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiUrl = 'http://localhost:8080/people';
  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<Person[]>(this.apiUrl);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person).pipe(catchError(this.handleError));
  }

  deletePerson(person: Person): Observable<Person> {
    return this.http.delete(this.apiUrl + '/' + person.id).pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse): Observable<any> {
    const errormsg = 'ERROR STATUS CODE: ' + httpError.status + '\n\n' + ' ERROR MESSAGE: ' + httpError.message;
    console.log(errormsg);
    return(throwError(errormsg));
  }
}
