import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Priority } from 'src/app/core/common';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-log-grievance',
  templateUrl: './log-grievance.component.html',
  styleUrls: ['./log-grievance.component.scss']
})
export class LogGrievanceComponent {

  loggrievanceForm: FormGroup;
  priorities = Priority;
  constructor(private fb: FormBuilder, private http: HttpService) {
    this.loggrievanceForm = fb.group({
      grievance:'',
      grievancedetails:'',
      createdon:'',
      priority: this.priorities.at(2)
    });
  }

  onSubmit() {

  }
}
