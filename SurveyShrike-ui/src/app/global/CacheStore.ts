import { Injectable, Inject } from '@angular/core';

@Injectable()
export class CacheStore {
  public static TOKEN="token";
  public static USER_DETAILS ="userDetails";

  // LOCAL_STORAGE , SESSION_STORAGE, MEMORY options for cache
  constructor() {}

  // there is way to set the max age in seconds through CacheOptionsInterface
  storeData(key: string, data: any): any {
    localStorage.setItem(key, JSON.stringify(data));
  }

  exists(key: string): any {
    return localStorage.getItem(key) === null ? true : false;
  }

  getData(key: string): any {
    const val = localStorage.getItem(key);
    if (!val) {
      return;
    }
    return JSON.parse(val);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
