import { Component } from '@angular/core';
import { Dog } from 'typings';

@Component({
  selector: 'app-dog-create',
  templateUrl: './dog-create.component.html',
  styleUrls: ['./dog-create.component.css']
})
export class DogCreateComponent {
  dog: Dog = {
    name: '',
    breed: '',
    birthday: undefined,
    preferredVet: '',
    emergencyContact: '',
    ownerNotes: '',
    privateNotes: '',
    medicalInformation: '',
    user: undefined
  };
}
