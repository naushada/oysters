import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GrievanceResolution, IAccountInfo, IGrievance, Priority } from 'src/app/core/common';
import { EventsService } from 'src/app/core/events.service';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-update-grievance',
  templateUrl: './update-grievance.component.html',
  styleUrls: ['./update-grievance.component.scss']
})
export class UpdateGrievanceComponent {

  priorities = Priority;
  resolutions = GrievanceResolution;
  grievances: any = undefined;
  accountInfo:IAccountInfo = <IAccountInfo>{};
  userid:string = "";

  updategrievanceForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpService, private evt: EventsService) {

    evt.subscribe("user.login", (id: string, document:string) => {
      if(id == "user.login") {
        let response = JSON.parse(document);
        this.accountInfo = {...response};
        this.userid = this.accountInfo.logininfo.userid;
      }
    });

    this.updategrievanceForm = fb.group({
      grievanceid : '',
      resolution: '',
      resolutiondetails:'',
      updatedon: '',
      updatedby: this.userid
    });
  }

  onSubmit() {
    let resolution = {
      "reason": this.updategrievanceForm.value.resolutiondetails,
      "updatedby": this.updategrievanceForm.value.updatedby,
      "updatedon": this.updategrievanceForm.value.updatedon,
    };

    this.http.updategrievance(this.updategrievanceForm.value.grievanceid, 
                              this.updategrievanceForm.value.resolution,
                              JSON.stringify(resolution)).subscribe((response: string) => {
      alert("Grievance ID: " + this.updategrievanceForm.value.grievanceid + " Updated Successfully");

    },
    (error) => {},
    () => {});
  }

  OnRetrieveGrievanceDetails() {
    let ticketid = this.updategrievanceForm.value.grievanceid;
    if(ticketid.length > 0) {
      this.http.getgrievanceinfobyticketid(ticketid).subscribe((response: string) => {
        this.grievances = JSON.parse(JSON.stringify(response)) as IGrievance;
        console.log(this.grievances);
      },
      (error) => {},
      () => {});
    }
  }
}
