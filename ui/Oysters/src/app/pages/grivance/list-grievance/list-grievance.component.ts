import { Component } from '@angular/core';
import { IGrievance } from 'src/app/core/common';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-list-grievance',
  templateUrl: './list-grievance.component.html',
  styleUrls: ['./list-grievance.component.scss']
})
export class ListGrievanceComponent {

  grievances: IGrievance = <IGrievance>{};
  constructor(private http: HttpService) {
    http.getgrievanceinfo().subscribe((response: IGrievance) => {
      this.grievances.tickets.length = 0;
      this,this.grievances.grievanceid = response.grievanceid;
      //this.grievances = {...response};
      response.tickets.forEach(ent => {this.grievances.tickets.push(ent);});
      console.log(this.grievances);
    });
  }
}
