import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { City, Country, Role, State } from 'src/app/core/common';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss']
})
export class UpdateAccountComponent {

  updateaccountForm: FormGroup;
  roles = Role;
  countries = Country;
  states = State;
  cities = City;

  constructor(private fb:FormBuilder, private http: HttpService) {
    this.updateaccountForm = fb.group({
      userid: '',
      password:'',
      username:'',
      dob:'',
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

  }
}
