import { Component, OnInit } from '@angular/core';
import { DogService } from '../../../services/dog.service';
import { Observable } from 'rxjs';
import { Dog } from 'typings';

@Component({
  selector: 'app-dog-lookup',
  templateUrl: './dog-lookup.component.html',
  styleUrls: ['./dog-lookup.component.css']
})
export class DogLookupComponent implements OnInit {
  dogs$: Observable<Dog[]>

  constructor(private dogService: DogService) {
    
  }

  ngOnInit() {
    this.dogs$ = this.dogService.getAllDogs();
  }
}
