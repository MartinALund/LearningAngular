import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent implements OnInit {

  programmingLanguages: string[] = [
    'C#', 'Java', 'Dart', 'C++', 'Typescript', 'Python', 'Javascript', 'C', 'Kotlin', 'Pascal', 'COBOL'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
