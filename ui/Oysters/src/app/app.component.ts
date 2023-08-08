import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsService } from './core/events.service';
import { subnavbarMap } from './core/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Oysters';

  constructor(private rt: Router) {
  }

  ngOnInit(): void {
    this.rt.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
      
  }

}
