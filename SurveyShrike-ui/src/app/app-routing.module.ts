import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegistrationPageComponent } from './component/registration-page/registration-page.component';


export const router: Routes = [
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full',
    data: {
      displayInMenu: false
    }
  },
  {
    path: 'login-page',
    component: LoginPageComponent,
    data: {
      displayInMenu: false
    }
  },
  {
    path: 'registration-page',
    component: RegistrationPageComponent,
    data: {
      displayInMenu: false
    }
  }];

  export const routes: ModuleWithProviders = RouterModule.forRoot(router, {
    enableTracing: true
  });
