import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './pages/account/create-account/create-account.component';
import { UpdateAccountComponent } from './pages/account/update-account/update-account.component';
import { ListAccountComponent } from './pages/account/list-account/list-account.component';
import { VnavbarAccountComponent } from './pages/account/vnavbar-account/vnavbar-account.component';
import { LogGrievanceComponent } from './pages/grivance/log-grievance/log-grievance.component';
import { ListGrievanceComponent } from './pages/grivance/list-grievance/list-grievance.component';
import { UpdateGrievanceComponent } from './pages/grivance/update-grievance/update-grievance.component';
import { SendEmailComponent } from './pages/email/send-email/send-email.component';
import { GvnabbarComponent } from './pages/grivance/gvnabbar/gvnabbar.component';
import { CdsIconModule, CdsModule } from '@cds/angular';
import '@cds/core/alert/register.js';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    UpdateAccountComponent,
    ListAccountComponent,
    VnavbarAccountComponent,
    LogGrievanceComponent,
    ListGrievanceComponent,
    UpdateGrievanceComponent,
    SendEmailComponent,
    GvnabbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CdsModule,
    CdsIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
