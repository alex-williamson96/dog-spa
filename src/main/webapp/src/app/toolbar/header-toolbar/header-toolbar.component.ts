import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/security/auth.service';
import { StorageService } from '../../services/security/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})
export class HeaderToolbarComponent implements DoCheck {
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
    this.router.navigateByUrl('home', {skipLocationChange: true})
    .then(() => this.router.navigate(['home']));
  }

}
