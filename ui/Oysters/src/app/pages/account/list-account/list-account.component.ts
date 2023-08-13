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
  responses?:Array<IAccountInfo>;
  selected:any = "";
  
  constructor(private fb: FormBuilder, private http: HttpService) {
    this.listaccountForm = fb.group({
      grade: '',
      section: ''
    });
  }

  onSubmit() {
    this.http.getaccountsinfo(this.listaccountForm.value.garde, this.listaccountForm.value.section).subscribe((rsp: Array<IAccountInfo>) => {
      //Use the spread operator
      this.responses = {...rsp};
      console.log(this.responses);
    },
    (error) => {
      alert("Unable to fetch the accounts details");
    },
    () => {

    });
  }
}
