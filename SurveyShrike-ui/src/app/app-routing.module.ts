import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegistrationPageComponent } from './component/registration-page/registration-page.component';
import { ServeyListPageComponent } from './component/servey-list-page/servey-list-page.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';


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
  },
  {
    path: 'survey-list-page',
    component: ServeyListPageComponent,
    data: {
      displayInMenu: false
    }
  },
  {
    path: 'admin-page',
    component: AdminPageComponent,
    data: {
      displayInMenu: false
    }
  }];

  export const routes: ModuleWithProviders = RouterModule.forRoot(router, {
    enableTracing: true
  });
