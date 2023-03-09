import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'typings';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  user$: Observable<User>;

  constructor(private http: HttpClient) {
    this.user$ = this.getUserInfo();
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>('/api/v1/user', { responseType: 'json'});
  }

  getAllCustomers(): Observable<User[]> {
    return this.http.get<User[]>('/api/v1/user/all', { responseType: 'json'});
  }

}
