import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/security/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements DoCheck {
  isLoggedIn = false;
  storageService: StorageService;

  constructor(storageService: StorageService, private router: Router) {
    this.isLoggedIn = storageService.isLoggedIn();
    this.storageService = storageService;
  }
  ngDoCheck(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  signOut() {
    this.storageService.signOut();
    this.router.navigateByUrl('/home', {skipLocationChange: false})
    .then(() => this.router.navigate(['/home']));
  }

}
