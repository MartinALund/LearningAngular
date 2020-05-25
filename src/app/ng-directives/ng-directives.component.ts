import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.scss']
})
export class NgDirectivesComponent implements OnInit {

  shouldBeDisplayed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
