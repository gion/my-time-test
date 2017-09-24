import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProxyService {

  private proxyBase: string = 'http://cors-proxy.htmldriven.com/'

  constructor(private http: Http) {}

  private convertUrl(url:string): string {
    return `${this.proxyBase}?url=${url}`;
  }

  private log(message:any, level:number=0): void {
    const logGroupName = 'ProxyService';
    const methods = ['log', 'warn', 'error']
    let method = methods[level] || 'log';

    console.group(logGroupName);
    console[method]('message');
    console.groupEnd();
  }

  private handleError(error: any): Observable<any> {
    this.log(error, 2);

    return Observable.throw(error);
  }

  private extractResponse(res:Response): object {
    let response = res.json();
    let result;

    // fail
    if (!response || !response.success) {
      return this.handleError(response.error);
    }

    try {
      result = JSON.parse(response.body);
    } catch (parseError) {
      return this.handleError(parseError);
    }

    this.log('success');
    return result;
  }

  get(url: string): Observable<any> {
    return this.http
      .get(this.convertUrl(url))
      .map(res => this.extractResponse(res))
  }
}
