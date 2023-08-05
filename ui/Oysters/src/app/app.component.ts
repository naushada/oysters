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
    evt.eventList.forEach((element:string) => {
      evt.subscribe(element, this.eventHandler);  
    });
    
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
