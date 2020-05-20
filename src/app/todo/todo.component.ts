import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  test: string[];

  constructor() { }

  ngOnInit(): void {
    this.test.push('hello');
    this.test.push('test');
    this.test.push('hello');
  }

}
