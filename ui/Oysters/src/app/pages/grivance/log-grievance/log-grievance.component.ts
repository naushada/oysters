import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAccountInfo, Priority } from 'src/app/core/common';
import { EventsService } from 'src/app/core/events.service';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-log-grievance',
  templateUrl: './log-grievance.component.html',
  styleUrls: ['./log-grievance.component.scss']
})
export class LogGrievanceComponent implements OnInit {

  loggrievanceForm: FormGroup;
  priorities = Priority;
  accountInfo:IAccountInfo = <IAccountInfo>{};
  userid:string = "";
  constructor(private fb: FormBuilder, private http: HttpService, private evt:EventsService) {
    evt.subscribe("user.login", (id:string, document:string) => {
      if(id == "user.login") {
        let response = JSON.parse(document);
        this.accountInfo = {...response};
        this.userid = this.accountInfo.logininfo.userid;
      }
    });

    this.loggrievanceForm = fb.group({
      grievance:'',
      grievancedetails:'',
      priority: this.priorities.at(2),
      createdon:'',
      createdby: this.userid
    });
  }

  ngOnInit(): void {
    this.loggrievanceForm.get('createdby')?.setValue(this.userid);
  }

  onSubmit() {

  }
}
