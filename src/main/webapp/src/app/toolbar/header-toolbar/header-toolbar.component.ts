import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/security/auth.service';
import { StorageService } from '../../services/security/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css']
})
export class HeaderToolbarComponent {
  isLoggedIn = false;
  storageService: StorageService;

  constructor(storageService: StorageService) {
    this.isLoggedIn = storageService.isLoggedIn();
  }


}
