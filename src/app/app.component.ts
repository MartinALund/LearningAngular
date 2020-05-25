import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular playground';
  public onEventTrigger(event) {
    console.log(event + ' but is displayed in app.component');
  }
}
