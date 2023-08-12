import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/core/http.service';
import { Role, Country, State, City, IStatus } from '../../../core/common';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  roles = Role;
  countries = Country;
  cities = City;
  states = State;

  createaccountForm:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpService) {

    this.createaccountForm = this.fb.group({
      userid: '',
      password:'',
      username:'',
      dob:'',
      grade: '',
      section: '',
      rollnumber:'',
      academicyear:'',
      pincode:'',
      cityname:this.cities.at(0),
      statename: this.states.at(0),
      countryname: this.countries.at(0),
      aadhaarnumber:'',
      role: '',
      emailid: '',
      cellnumber:'',
      dateofadmision:'',
      fathername:'',
      mothername:''

    });
  }

  onSubmit() {

    let request = {
      "personalinfo": {
        "name":           this.createaccountForm.value.username,
        "dob":            this.createaccountForm.value.dob,
        "grade":          this.createaccountForm.value.grade,
        "section":        this.createaccountForm.value.section,
        "rollnumber":     this.createaccountForm.value.rollnumber,
        "academicyear":   this.createaccountForm.value.academicyear,
        "dateofadmision": this.createaccountForm.value.dateofadmision,
        "fathername":     this.createaccountForm.value.fathername,
        "mothername":     this.createaccountForm.value.mothername
      },
      "addressinfo": {
        "address":        this.createaccountForm.value.address,
        "pincode":        this.createaccountForm.value.pincode,
        "city":           this.createaccountForm.value.city,
        "state":          this.createaccountForm.value.state,
        "country":        this.createaccountForm.value.country
      },
      "logininfo": {
        "userid":         (this.createaccountForm.value.username).replaceAll(' ', '.') ,
        "password":       this.createaccountForm.value.password,
        "role": []
      },
      "contactinfo": {
        "emails": (this.createaccountForm.value.emailid).split(',') ,
        "cellnumbers": (this.createaccountForm.value.cellnumber).split(',')
      },
      "academichistoryinfo" : [
        {
          "grade":          this.createaccountForm.value.grade,
          "section":        this.createaccountForm.value.section,
          "rollnumber":     this.createaccountForm.value.rollnumber,
          "academinyear":   this.createaccountForm.value.academicyear
        }
      ]
    }

    this.http.createaccount(JSON.stringify(request)).subscribe((response: IStatus) => {
        console.log(response);
        console.log(response.ip);
        console.log(response.reason);
        console.log(response.result);
        console.log(response.ts);
        alert("Account Created Successfully");
        this.createaccountForm.reset('');
      },
      (error) => {},
      () => {});
  }
}
