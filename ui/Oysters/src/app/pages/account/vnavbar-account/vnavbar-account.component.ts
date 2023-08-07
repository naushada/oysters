import { Component, OnInit } from '@angular/core';
import { subnavbarMap, vnavbarMap } from 'src/app/core/common';
import { EventsService } from 'src/app/core/events.service';

@Component({
  selector: 'app-vnavbar-account',
  templateUrl: './vnavbar-account.component.html',
  styleUrls: ['./vnavbar-account.component.scss']
})
export class VnavbarAccountComponent implements OnInit {
  vnavbar = vnavbarMap;
  subnavbar = subnavbarMap;
  vnavs = this.vnavbar.get("Account");
  selectedItem: string = "Create Account";
  constructor(private evt:EventsService) {
    evt.subscribe("Account", this.eventHandler);
  }

  ngOnInit(): void {
    
  }
  public eventHandler(ent: {id:string, document: string}) {
    return({id: ent.id, document:ent.document});
  }

  onClick(item: string) {
    this.selectedItem = item;
    this.evt.publish({id: item, document: ""});

  }
}
