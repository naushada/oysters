import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubSink } from 'subsink';

@Injectable({
  providedIn: 'root'
})
export class EventsService implements OnDestroy {

  private subsink = new SubSink();
  private bs$: BehaviorSubject<{id:string, document:string}> = new BehaviorSubject({id:"nil", document:"nil"});

  /**
   * Event to be published.
   */
  public eventList:Array<string> = [
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

  /**
   * Publish compelte event to Observer.
   */
  public complete() {
    this.bs$.complete();
  }

  /**
   * Publish Error to observer.
   * @param event 
   */
  public error(event: {id:string, document:string}) {
    this.bs$.error(event);
  }

  private defaultAction = (id:string, document: string) => { return({id, document});}

  /**
   * 
   * @param evt 
   * @param eventHandler 
   * @returns 
   */
  public subscribe(eventHandler = this.defaultAction) {
    this.subsink.add(this.bs$.subscribe((event: {id:string, document:string}) => {eventHandler(event.id, event.document);},
        (error) => {eventHandler("error", "error");},
        () => {eventHandler("end", "end");}));
  }

  ngOnDestroy(): void {
      this.subsink.unsubscribe();
  }
}
