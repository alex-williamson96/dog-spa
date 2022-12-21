import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-sidenav-button',
  templateUrl: './mobile-sidenav-button.component.html',
  styleUrls: ['./mobile-sidenav-button.component.css']
})
export class MobileSidenavButtonComponent implements OnInit {
  @Input('name') name!: string;
  route = 'error';

  constructor() {}

  ngOnInit() {
    this.route = 'info/' + this.name.toLowerCase();
  }
}
