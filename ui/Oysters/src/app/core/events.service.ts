import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubSink } from 'subsink';

@Injectable({
  providedIn: 'root'
})
export class EventsService implements OnDestroy {

  private subsink = new SubSink();
  private bs$: BehaviorSubject<{id:string, document:string}> = new BehaviorSubject({id:"nil", document:"nil"});
  private eventList:Array<string> = [
    "user.login",
    "user.logout",
    "user.password.reset",
    "menu.mainbar.account",
    "menu.mainbar.pta",
    "menu.navbar.account",
    "menu.navbar.pta",
    "menu.navbar.account.create",
    "menu.navbar.account.modify",
    "menu.navbar.account.delete",
    "menu.navbar.account.list"
  ];
  constructor() { }

  /**
   * This function publishes the Event to subscribed component
   * @param event 
   */
  public publish(event: {id:string, document:string}) {
    this.bs$.next(event);
  }

  private defaultAction = (id:string, document: string) => { return({id, document});}

  public subscribe(evt: {id: string, document:string}, eventHandler = this.defaultAction) : number {
    if(this.eventList.indexOf(evt.id) == -1) {
      //Couldn't find the event.id to register for change.
      let filteredList:Array<string> = [];
      this.eventList.filter(what => {
        if(what.length >= evt.id.length && what.includes(evt.id)) {
          filteredList.push(what);
        }
      });

      if(!filteredList.length) {
        return(-1);
      } else {
        //subscribe for change now.
      }

    } else {
      if(this.eventList.includes(evt.id)) {
        this.subsink.add(this.bs$.subscribe(event => {
          if(evt.id == event.id) {
            console.log("event: " + evt + " evt is Received invoking the registered Handler with document: "+ event.document);
            eventHandler(event.id, event.document);
          }
        },
        (error) => {
          eventHandler("error", "error");
        },
        () => {
          eventHandler("end", "end");
        }));
      }
    }
    return(0);
  }

  ngOnDestroy(): void {
      this.subsink.unsubscribe();
  }
}
