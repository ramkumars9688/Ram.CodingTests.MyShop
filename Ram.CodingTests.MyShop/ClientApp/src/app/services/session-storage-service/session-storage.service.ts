import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  public setItem(key: string, data: any): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  public getItem(key: string): any {
    return JSON.parse(sessionStorage.getItem(key));
  }

  public removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

}
