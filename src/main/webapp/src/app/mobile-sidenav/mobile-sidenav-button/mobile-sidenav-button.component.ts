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

  constructor(storageService: StorageService) {
    this.isLoggedIn = storageService.isLoggedIn();
  }

  ngOnInit() {
    this.route = this.name.toLowerCase();

    if (this.isLoggedIn) {
      this.route = '/app' + this.name.toLowerCase();
    }
  }
}
