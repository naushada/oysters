import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAccountInfo } from 'src/app/core/common';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent {

  listaccountForm: FormGroup;
  responses:IAccountInfo[] = <IAccountInfo[]>[{}];
  selected:any;
  display:boolean = false;
  constructor(private fb: FormBuilder, private http: HttpService) {
    this.listaccountForm = fb.group({
      grade: '',
      section: ''
    });
  }

  onSubmit() {
    this.http.getaccountsinfo(this.listaccountForm.value.garde, this.listaccountForm.value.section).subscribe((rsp: Array<IAccountInfo>) => {
      this.responses.length = 0;
      rsp.forEach(ent => this.responses.push(ent));
      this.display = true;
    },
    (error) => {
      alert("Unable to fetch the accounts details");
    },
    () => {

    });
  }
}
