import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsService } from './core/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Oysters';
  constructor(private evt: EventsService) {
    //let evtHandler = (id:string, document: string) => {return({id, document});};
    evt.subscribe((id:string, document: string) => {
      return({id, document});
    });
  }

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }
}
