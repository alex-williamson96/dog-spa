import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-toolbar-item',
  templateUrl: './header-toolbar-item.component.html',
  styleUrls: ['./header-toolbar-item.component.css'],
})
export class HeaderToolbarItemComponent implements OnInit{
  @Input('name') name!: string;
  route = 'error';

  ngOnInit() {
    this.route = this.name.toLowerCase();

    if (this.name === 'App') {
      this.route = '/' + this.name.toLowerCase();
    }
  }
}
