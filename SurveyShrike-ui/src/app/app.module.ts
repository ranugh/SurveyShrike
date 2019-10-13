import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegistrationPageComponent } from './component/registration-page/registration-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/UserService.service';
import { HttpClientModule } from '@angular/common/http';
import { ServeyListPageComponent } from './component/servey-list-page/servey-list-page.component';
import { AppDataProvider } from './global/AppDataProvider';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { CreateSurveyPageComponent } from './component/create-survey-page/create-survey-page.component';
import { ViewUserSurveyComponent } from './component/view-user-survey/view-user-survey.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ServeyListPageComponent,
    AdminPageComponent,
    CreateSurveyPageComponent,
    ViewUserSurveyComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,AppDataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
