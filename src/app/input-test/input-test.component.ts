import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit {
  @Input() appTitle;
  @Output() outputEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public onEventTrigger() {
    this.outputEvent.emit('Event triggered in input-test class,');
  }

}
