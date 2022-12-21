import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) { }

  authenticate(credentials, callback) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + window.btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(res => {
      this.authenticated = true;

      if (!res['name']) {
        this.authenticated = false;
      }

      return callback && callback();
    });
  }

}
