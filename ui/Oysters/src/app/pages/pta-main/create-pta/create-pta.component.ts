import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IStatus } from 'src/app/core/common';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-create-pta',
  templateUrl: './create-pta.component.html',
  styleUrls: ['./create-pta.component.scss']
})
export class CreatePtaComponent {

  createptaForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpService) {
    this.createptaForm = fb.group({
      userid:'',
      password:'',
      username:'',
      grade:'',
      academicyear:'',
      emailid:'',
      cellnumber:''
    });
  }

  onSubmit() {

    let request = {"academicyear": this.createptaForm.value.academicyear, "ptas": [{
      "grade": this.createptaForm.value.grade,
      "name": this.createptaForm.value.username,
      "password": this.createptaForm.value.password,
      "userid": this.createptaForm.value.userid,
      "emailid": this.createptaForm.value.emailid,
      "cellnumber": this.createptaForm.value.cellnumber,
      "role": "Pta"
    }]};
    
    this.http.createptainfo(JSON.stringify(request)).subscribe((response: IStatus) => {
      alert(response);
    },
    (error) => {},
    () => {});
  }
}
