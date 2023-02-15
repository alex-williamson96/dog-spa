import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'typeings';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http: HttpClient;
  user$: Observable<User>;

  constructor(http: HttpClient) {
    this.http = http;
    this.user$ = this.getUserInfo();
  }

  getUserInfo() {
    return this.http.get<User>('http://localhost:8080/api/v1/user/', { responseType: 'json'});
  }
}
