import { Component, OnInit } from '@angular/core';
import { User } from 'typings';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;

  constructor(private profileService: ProfileService) {
    
  }

  ngOnInit() {
    this.user$ = this.profileService.user$;
  }
}
