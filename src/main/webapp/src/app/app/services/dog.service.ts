import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from 'typings';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  getDog(id): Observable<Dog> {
    return this.http.get<Dog>('/api/v1/dog/' + id, { responseType: 'json'});
  }

  createDog(dog: Dog, username: string) {
    return this.http.post('/api/v1/dog/' + username, dog);
  }

  updateDog(dog: Dog) {
    return this.http.put('/api/v1/dog/', dog);
  }

  getAllDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>('/api/v1/dog/all', { responseType: 'json'});
  }

}
