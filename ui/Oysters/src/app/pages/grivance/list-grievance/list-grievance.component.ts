import { Component } from '@angular/core';
import { IGrievance } from 'src/app/core/common';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-list-grievance',
  templateUrl: './list-grievance.component.html',
  styleUrls: ['./list-grievance.component.scss']
})
export class ListGrievanceComponent {

  grievances: any;
  
  constructor(private http: HttpService) {
    http.getgrievanceinfo().subscribe((response: string) => {
      //this.grievances.tickets.length = 0;
      this.grievances = JSON.parse(JSON.stringify(response)) as IGrievance;
      console.log(this.grievances);
      //alert(this.grievances);
    });
  }
}
