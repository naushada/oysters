import { Component } from '@angular/core';
import { vnavbarMap } from 'src/app/core/common';

@Component({
  selector: 'app-pta-main',
  templateUrl: './pta-main.component.html',
  styleUrls: ['./pta-main.component.scss']
})
export class PtaMainComponent {

  vnavbar = vnavbarMap;
  vnavs = this.vnavbar.get("PTA");
  selectedItem: string = "Create PTA";

  onClick(item: string) {
    this.selectedItem = item;
    //this.evt.publish({id: item, document: ""});

  }

}
