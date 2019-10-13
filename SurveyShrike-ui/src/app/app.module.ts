import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegistrationPageComponent } from './component/registration-page/registration-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/UserService.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
