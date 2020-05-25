import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit {
  @Input() appTitle;
  constructor() { }

  ngOnInit(): void {
  }

}
