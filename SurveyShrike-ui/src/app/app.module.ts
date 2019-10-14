import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegistrationPageComponent } from './component/registration-page/registration-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/UserService.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServeyListPageComponent } from './component/servey-list-page/servey-list-page.component';
import { AppDataProvider } from './global/AppDataProvider';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { CreateSurveyPageComponent } from './component/create-survey-page/create-survey-page.component';
import { ViewUserSurveyComponent } from './component/view-user-survey/view-user-survey.component';
import { SurveyModel } from './model/SurveyModel';
import { SurveyService } from './service/SurveyService';
import { JwtInterceptor } from './interceptor/Jwtinterceptor';
import { CacheStore } from './global/CacheStore';
import { UserSurveyPageComponent } from './component/user-survey-page/user-survey-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ServeyListPageComponent,
    AdminPageComponent,
    CreateSurveyPageComponent,
    ViewUserSurveyComponent,
    UserSurveyPageComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,AppDataProvider,SurveyService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },CacheStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
