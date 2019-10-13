import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
// import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

// import { HttpClientModule } from '@angular/common/http';



declare var pako: any;

@Injectable()
export class CommonDataService {
  // private static ngProg: NgProgressRef;
  private static count = 0;
  constructor(
    private http: HttpClient,
    public router: Router
  ) {
    // CommonDataService.ngProg = ngProgress.ref();
  }

  startProgressBar() {
    if (!(CommonDataService.count > 0)) {
      // this.ngProgress.start();
    }
    CommonDataService.count++;
  }

  getAllEntities(url: string) {
    this.startProgressBar();
    const that = this;
    return this.http
      .get(url)
      .pipe(
        map(this.extractData),
        catchError(err => this.handleError(err, url))
      );
    // .finally(() => this.ngProgress.done());
  }

  getEntity(url: string) {
    this.startProgressBar();
    const that = this;
    return this.http
      .get(url)
      .pipe(
        map(this.extractData),
        catchError(err => this.handleError(err, url))
      );
    //  .finally(() => this.ngProgress.done());
  }

  getEntityForSearch(url: string) {
    this.startProgressBar();
    const that = this;
    return this.http
      .get(url)
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        map(this.extractData),
        catchError(err => this.handleError(err, url))
      );
    //  .finally(() => this.ngProgress.done());
  }

  getEntityWithPayloadAsArg(url: string, payload: any) {
    this.startProgressBar();
    const that = this;
    const reqHead = new HttpHeaders();
    reqHead.append('Content-Type', 'application/json');
    return this.http
      .post(url, payload, { headers: reqHead })
      .pipe(
        map(this.extractData),
        catchError(err => this.handleError(err, url))
      );
  }
 

  authenticate(url: string, userInfo: any) {
    this.startProgressBar();
    const that = this;
    const reqHead = new HttpHeaders(
      userInfo
        ? {
            authorization:
              'Basic ' + btoa(userInfo.login + ':' + userInfo.password)
          }
        : { authorization: 'Basic ' + btoa('' + ':' + '') }
    );
    reqHead.append('Content-Type', 'application/json');
    if (userInfo) {
      return this.http
        .post(url, userInfo, { headers: reqHead })
        .pipe(
          map(this.extractData),
          catchError(err => this.handleError(err, url))
        );
    } else {
      return this.http
        .post(url, {}, { headers: reqHead })
        .pipe(
          map(this.extractData),
          catchError(err => this.handleError(err, url))
        );
    }
  }

  private extractData(response: Response) {
    CommonDataService.count--;
    if (CommonDataService.count <= 0) {
      // CommonDataService.ngProg.complete();
    }
    return (response) || {};
  }

  createEntity(url: string, resource) {
    this.startProgressBar();
    const that = this;
    const reqHead = new HttpHeaders();
    reqHead.append('Content-Type', 'application/octet-stream');
    reqHead.append('Content-Encoding', 'gzip');
    const body = JSON.stringify(
      JSON.parse(resource),
      this.replaceEmptyStringsAndBooleans
    );
    // console.log("body==>"+body);
    const compressedData = this.compressDataUsingPako(body);
    const gzippedBLob = new Blob([compressedData], {
      type: 'application/octet-stream'
    });
    return this.http
      .post(url, gzippedBLob, { headers: reqHead })
      .pipe(
        map(this.extractData),
        catchError(err => this.handleError(err, url))
      );
  }

  replaceEmptyStringsAndBooleans(key, value) {
    if (
      value === null ||
      value === undefined ||
      (typeof value === 'string' && value === '')
    ) {
      return undefined;
    }
    if (
      value === null ||
      value === undefined ||
      (typeof value === 'boolean' && value === false)
    ) {
      return undefined;
    }
    return value;
  }

  updateEntity(url: string, resource: any) {
    this.startProgressBar();
    const that = this;
    return this.http
      .patch(url, resource)
      .pipe(
        map(this.extractData),
        catchError(err => this.handleError(err, url))
      );
  }

  // TODO RS - this method is causing bad request issues, needs to be verified
  deleteEntity(url: string) {
    this.startProgressBar();
    const that = this;
    return this.http
      .delete(url)
      .pipe(
        map(this.extractData),
        catchError(err => this.handleError(err, url))
      );
  }

  private handleError(error: HttpErrorResponse, url: string) {
    CommonDataService.count = 0;
    // CommonDataService.ngProg.complete();

    return throwError(error);
  }

  compressDataUsingPako(jsonString: string) {
    const binaryString = pako.gzip(jsonString);
    return binaryString;
  }
}
