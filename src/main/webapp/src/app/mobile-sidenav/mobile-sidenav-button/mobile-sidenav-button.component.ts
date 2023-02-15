import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../services/security/storage.service';

@Component({
  selector: 'app-mobile-sidenav-button',
  templateUrl: './mobile-sidenav-button.component.html',
  styleUrls: ['./mobile-sidenav-button.component.css']
})
export class MobileSidenavButtonComponent implements OnInit {
  @Input('name') name!: string;
  route = 'error';
  isLoggedIn: boolean;
  storageService: StorageService;

  constructor(storageService: StorageService) {
    this.storageService = storageService;
  }

  ngOnInit() {
    this.updateRoute();
  }

  updateRoute() {
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.route = this.name.toLowerCase();
    if (this.isLoggedIn) {
      this.route = '/app/' + this.name.toLowerCase();
    }
  }



}
