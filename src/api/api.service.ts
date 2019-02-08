import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';

class ApiClient<T> {
  constructor(
    private service: ApiService,
    private action: string) {
  }
  async getAsync(args: any): Promise<T> {
    const url = this.service
      .url()
      .resolveFor(this.action, args);

    return await this.service
      .client()
      .get<T>(url)
      .toPromise<T>();
  }
  get(args: any): Observable<T>  {
    const url = this.service
      .url()
      .resolveFor(this.action, args);

    return this.service
      .client()
      .get<T>(url)
      .pipe();
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private urlService: UrlService) {
  }
  for<T>(action: string): ApiClient<T> {
    return new ApiClient<T>(this, action);
  }
  client(): HttpClient {
    return this.httpClient;
  }
  url(): UrlService {
    return this.urlService;
  }
}
