import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/security/storage.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {
  isAdmin: boolean;
  isEmployee: boolean;
  isUser: boolean;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.isAdmin = this.storageService.isAdmin();
    this.isEmployee = this.storageService.isEmployee();
    this.isUser = this.storageService.isUser();
  }

}
