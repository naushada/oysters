import { Component } from '@angular/core';
import { EventsService } from './core/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Oysters';
  constructor(private subject: EventsService) {}
}
