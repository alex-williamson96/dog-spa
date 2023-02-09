import { Component, HostListener } from '@angular/core';
import { debounce } from './decorators/debounce';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public innerWidth = window.screen.width;

  constructor() {
  }

  @HostListener('window:resize', ['$event'])
  @debounce()
  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }
}
