import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { subnavbarMap } from 'src/app/core/common';
import { EventsService } from 'src/app/core/events.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  menubar = subnavbarMap;
  selectedItem:string = "Grievances";
  constructor(private evt: EventsService, private rt:Router) {
    evt.subscribe("user.login", this.eventHandler);
  }


  /**
   * 
   * @param id 
   * @param document 
   * @returns 
   */
  public eventHandler(id:string, document: string) {
    console.log("Events: " + id);
    if(id == "user.login") {
      alert("event is user.login: " + id + " document: " + document);
      this.selectedItem = "Grievances";
      //this.rt.navigateByUrl('/main');
    }
    //alert(id);
    //Process event posted by other component.
    return({id, document});
  }

  onClick(item: string) {
    this.selectedItem = item;
    //this.evt.publish({id:item, document:""});
  }
}
