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
    evt.subscribe(this.eventHandler);
  }

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }

  /**
   * 
   * @param id 
   * @param document 
   * @returns 
   */
  public eventHandler(id:string, document: string) {
    //Process event posted by other component.
    return({id, document});
  }
}
