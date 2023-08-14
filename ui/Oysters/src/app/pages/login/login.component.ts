import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAccountInfo } from 'src/app/core/common';
import { EventsService } from 'src/app/core/events.service';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(private fb:FormBuilder, private event:EventsService, private http: HttpService, private rt:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.value.username;
  }

  get password() {
    return this.loginForm.value.password;
  }

  onLogin() {

    if(!this.username.length || !this.password.length) {
      alert("User ID or Password Can't be Empty");
    }
    
    this.http.getlogininfo(this.username, this.password).subscribe((accountinfo:IAccountInfo) => {
      let id:string = "user.login";
      let document: string = JSON.stringify(accountinfo);
      this.event.publish({id, document});
      this.rt.navigateByUrl('/main');
    },
    (error) => {
      alert("Invalid Credentials");
    },
    () => {

    });

  }
}
