import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAccountInfo, subnavbarMap } from 'src/app/core/common';
import { EventsService } from 'src/app/core/events.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  accountInfo:IAccountInfo = <IAccountInfo>{};
  menubar = subnavbarMap;
  selectedItem:string = "Grievances";

  constructor(private evt: EventsService, private rt:Router) {
    evt.subscribe("user.login", (id:string, document:string) => {
      if(id == "user.login") {
        let response = JSON.parse(JSON.stringify(document));
        this.accountInfo = <IAccountInfo>(response);
        if(this.accountInfo) {
          console.log(this.accountInfo);
        } else {
          console.log("accountInfo is empty");
        }
      }
    });
  }

  isDisabled(menuItem: string) {
    let role = this.menubar.get(menuItem);
    if(role?.length == 1 && role.at(0) == "*") {
      console.log("Returning true");
      return(true);
    }

    let isPresent = this.accountInfo.logininfo.role.forEach(ent => role?.includes(ent));
    return(isPresent);
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
      let response = JSON.parse(JSON.stringify(document));
      this.accountInfo = <IAccountInfo>(response);
      if(this.accountInfo) {
        console.log(this.accountInfo);
      } else {
        console.log("accountInfo is empty");
      }
      //console.log(response);
      //this.accountInfo.personalinfo = response.personalinfo;
      //this.accountInfo.addressinfo = response.addressinfo;
      //this.accountInfo.contactinfo = response.contactinfo;
      //this.accountInfo.logininfo = response.logininfo;
      //this.accountInfo.academichistoryinfo = response.academichistoryinfo;
      //alert("Naushad: ");
      //alert(this.accountInfo);
      this.selectedItem = "Grievances";
    }

    //Process event posted by other component.
    //return({id, document});
  }

  onClick(item: string) {
    this.selectedItem = item;
    //this.evt.publish({id:item, document:""});
  }
}
