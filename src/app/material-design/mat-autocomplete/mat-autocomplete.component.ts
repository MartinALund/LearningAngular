import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-mat-autocomplete',
  templateUrl: './mat-autocomplete.component.html',
  styleUrls: ['./mat-autocomplete.component.scss']
})
export class MatAutocompleteComponent implements OnInit {
  myControl = new FormControl();
  programmingLanguages: string[] = [
    'C#', 'Java', 'Dart', 'C++', 'Typescript', 'Python', 'Javascript', 'C', 'Kotlin', 'Pascal', 'COBOL'
  ];
  filteredProgrammingLanguages: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
    this.filteredProgrammingLanguages = this.myControl.valueChanges
      .pipe(startWith(''),
        map(value => this.filter(value)));
  }
  private filter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.programmingLanguages.filter(option => option.toLocaleLowerCase().includes(filterValue));
  }

}
