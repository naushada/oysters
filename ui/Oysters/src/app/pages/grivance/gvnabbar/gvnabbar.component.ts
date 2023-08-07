import { Component } from '@angular/core';
import { vnavbarMap } from 'src/app/core/common';
import { EventsService } from 'src/app/core/events.service';

@Component({
  selector: 'app-gvnabbar',
  templateUrl: './gvnabbar.component.html',
  styleUrls: ['./gvnabbar.component.scss']
})
export class GvnabbarComponent {
  vnavbar = vnavbarMap;
  vnavs = this.vnavbar.get("Grievances");
  selectedItem: string = "Create Grievance";
  constructor(private evt: EventsService) {

  }



  onClick(item: string) {
    this.selectedItem = item;
    this.evt.publish({id: item, document: ""});

  }
}
