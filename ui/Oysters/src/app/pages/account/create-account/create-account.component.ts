import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/core/http.service';
import { Role, Country, State, City } from '../../../core/common';

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
      pincode:'',
      cityname:this.cities.at(0),
      statename: this.states.at(0),
      countryname: this.countries.at(0),
      aadhaarnumber:'',
      role: '',
      emailid: '',
      cellnumber:'',
      dateofadmision:''

    });
  }

  onSubmit() {

  }
}
