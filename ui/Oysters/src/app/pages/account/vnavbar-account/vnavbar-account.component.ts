import { Component } from '@angular/core';
import { subnavbarMap, vnavbarMap } from 'src/app/core/common';
import { EventsService } from 'src/app/core/events.service';

@Component({
  selector: 'app-vnavbar-account',
  templateUrl: './vnavbar-account.component.html',
  styleUrls: ['./vnavbar-account.component.scss']
})
export class VnavbarAccountComponent {
  vnavbar = vnavbarMap;
  subnavbar = subnavbarMap;
  vnavs = this.vnavbar.get("Account");

  constructor(private evt:EventsService) {
    evt.subscribe("Account", this.eventHandler);
  }

  public eventHandler(ent: {id:string, document: string}) {
    return({id: ent.id, document:ent.document});
  }

  onClick(item: string) {
    this.evt.publish({id: item, document: ""});

  }
}
