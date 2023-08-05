import { HttpClient, HttpHeaders, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAccountInfo, IStatus } from './common';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiURL:string = "";

  constructor(private http:HttpClient) {

    if(!environment.production) {
      this.apiURL = "http://localhost:8080"; 
    }
   }

   
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getaccountinfo(id:string, pwd: string): Observable<IAccountInfo> {

    let payload = {
      "userid": `${id}`,
      "password": `${pwd}`
    };

    let uri: string = "";
    if(this.apiURL.length > 0) {
      uri = this.apiURL + "/api/v1/user/login";
    } else {
      uri = "/api/v1/user/login";
    }
    
    return this.http.post<IAccountInfo>(uri, JSON.stringify(payload), this.httpOptions);
  }


  getaccountsinfo(username:string): Observable<Array<IAccountInfo>> {

    let payload = {
      "username": `${username}`,
    };

    let uri: string = "";
    if(this.apiURL.length > 0) {
      uri = this.apiURL + "/api/v1/users/info";
    } else {
      uri = "/api/v1/users/info";
    }
    
    return this.http.post<Array<IAccountInfo>>(uri, JSON.stringify(payload), this.httpOptions);
  }

  createaccount(accountinfo: string): Observable<IStatus> {

    let uri: string = "";
    if(this.apiURL.length > 0) {
      uri = this.apiURL + "/api/v1/account";
    } else {
      uri = "/api/v1/account";
    }
    
    return this.http.post<IStatus>(uri, JSON.stringify(accountinfo), this.httpOptions);
  }

  createaccounts(accountinfo: Array<string>): Observable<IStatus> {

    let uri: string = "";
    if(this.apiURL.length > 0) {
      uri = this.apiURL + "/api/v1/account";
    } else {
      uri = "/api/v1/account";
    }
    
    return this.http.post<IStatus>(uri, JSON.stringify(accountinfo), this.httpOptions);
  }

}