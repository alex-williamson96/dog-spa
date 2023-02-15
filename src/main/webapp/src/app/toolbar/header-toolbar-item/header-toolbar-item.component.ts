import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/security/storage.service';

@Component({
  selector: 'app-header-toolbar-item',
  templateUrl: './header-toolbar-item.component.html',
  styleUrls: ['./header-toolbar-item.component.css'],
})
export class HeaderToolbarItemComponent implements OnInit{
  @Input('name') name!: string;
  route = 'error';
  storageService: StorageService;
  isLoggedIn = false;

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
