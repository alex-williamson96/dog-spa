import { Component } from '@angular/core';
import { User } from 'typeings';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user$: Observable<User>;

  constructor(profileService: ProfileService) {
    this.user$ = profileService.user$.pipe(
      
    );
  }
}
