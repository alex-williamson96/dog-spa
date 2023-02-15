import { Component } from '@angular/core';
import { StorageService } from '../services/security/storage.service';

@Component({
  selector: 'app-mobile-sidenav',
  templateUrl: './mobile-sidenav.component.html',
  styleUrls: ['./mobile-sidenav.component.css'],
})
export class MobileSidenavComponent {
  isOpen = true;
  isLoggedIn = false;

  constructor(storageService: StorageService) {
    this.isLoggedIn = storageService.isLoggedIn();
  }
}
