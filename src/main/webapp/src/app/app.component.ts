import { Component, HostListener } from '@angular/core';
import { debounce } from './decorators/debounce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'webapp';
  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  @debounce()
  onResize(event: any) {
    console.log(this.innerWidth)
    this.innerWidth = event.target.innerWidth;
  }
}
