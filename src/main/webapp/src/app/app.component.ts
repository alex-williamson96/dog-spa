import { Component, HostListener } from '@angular/core';
import { debounce } from './decorators/debounce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public innerWidth = window.screen.width;

  @HostListener('window:resize', ['$event'])
  @debounce()
  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }
}
