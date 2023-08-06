import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GrievanceResolution, Priority } from 'src/app/core/common';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-update-grievance',
  templateUrl: './update-grievance.component.html',
  styleUrls: ['./update-grievance.component.scss']
})
export class UpdateGrievanceComponent {

  priorities = Priority;
  resolutions = GrievanceResolution;

  updategrievanceForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpService) {

    this.updategrievanceForm = fb.group({

    });
  }

  onSubmit() {

  }
}
