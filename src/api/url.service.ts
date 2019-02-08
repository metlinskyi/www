import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  host: string;
  constructor() {
    this.host = 'http://veofdua:1234/';
  }

  resolveFor(path: string, params: any): string {
    return this.host + path.toLowerCase() + '/' + params || '';
  }

}
