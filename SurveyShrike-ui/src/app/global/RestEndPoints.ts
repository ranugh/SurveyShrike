import { isDevMode } from '@angular/core';

export class RestEndPoints {

    public static USERS = '/users';

    public static getBaseURL() {
        return this.getContext();
      }
      public static getBaseURLWithOutApi() {
        return this.getContext();
      }
      public static getContext() {
        let context = '';
        if (isDevMode()) {
          context = '/surveyshrike';
        } else {
          context = window.location.pathname.split('/')[1];
          context = context ? '/' + context : '/surveyshrike';
        }
        return context;
      }
    
      public static getBaseHref() {
        let context = '';
        if (isDevMode()) {
          context = '/';
        } else {
          context = window.location.pathname.split('/')[1];
          context = context ? '/' + context + '/' : '/';
        }
        return context;
      }

}