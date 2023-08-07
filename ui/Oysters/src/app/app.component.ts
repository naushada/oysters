import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsService } from './core/events.service';
import { subnavbarMap } from './core/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Oysters';
  menubar = subnavbarMap;
  selectedItem:string = "Grievances";
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
    //alert(id);
    //Process event posted by other component.
    return({id, document});
  }

  onClick(item: string) {
    this.selectedItem = item;
    this.evt.publish({id:item, document:""});
  }
}
