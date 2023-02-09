import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Demo';
  greeting: any = {};
  a: any;
  b: any;
  c: any;
  d: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(data => this.a = data);
    this.userService.getModeratorBoard().subscribe(data => this.b = data);
    this.userService.getPublicContent().subscribe(data => this.c = data);
    this.userService.getUserBoard().subscribe(data => this.d = data);
  }

}
