import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription,filter,map } from 'rxjs';
import { SubSink } from 'subsink';

@Injectable({
  providedIn: 'root'
})
export class EventsService implements OnDestroy {

  private subsink = new SubSink();
  private bs$: BehaviorSubject<{id:string, document:string}> = new BehaviorSubject<{id:string, document:string}>({id:"nil", document:"nil"});

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
  public subscribe(event: string, eventHandler:any) {
    this.subsink.add(this.bs$.pipe(filter((evt: {id:string, document:string}) => evt.id == event), map((evt: {id:string, document:string}) => evt)).subscribe(
      (e: {id:string, document:string}) => {alert(e);eventHandler(e.id, e.document)},
      (error) => {},
      () => {}
    ));
  }

  public on(event: {id:string, document:string}, eventHandler:any): Subscription {
    return(this.bs$.pipe(filter((evt: {id:string, document:string}) => evt.id == event.id), map((evt: {id:string, document:string}) => evt)).subscribe(eventHandler));
  }

  ngOnDestroy(): void {
      this.subsink.unsubscribe();
  }

  /*
  public on(event: EventsService, action:any): Subscription {
    return(this.bs$.pipe(filter((e:EmitEvent) => e.name == event),map((e:emitEvent) => e.value)).subscribe(action));
  }*/
}
