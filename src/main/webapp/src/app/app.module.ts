import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderToolbarComponent } from './toolbar/header-toolbar/header-toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BoardingPageComponent } from './pages/boarding-page/boarding-page.component';
import { DaycarePageComponent } from './pages/daycare-page/daycare-page.component';
import { GroomingPageComponent } from './pages/grooming-page/grooming-page.component';
import { HeaderToolbarItemComponent } from './toolbar/header-toolbar-item/header-toolbar-item.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MobileSidenavComponent } from './mobile-sidenav/mobile-sidenav.component';
import { MobileSidenavButtonComponent } from './mobile-sidenav/mobile-sidenav-button/mobile-sidenav-button.component';
import { AppService } from './app.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest'),
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    HomePageComponent,
    BoardingPageComponent,
    DaycarePageComponent,
    GroomingPageComponent,
    HeaderToolbarItemComponent,
    MobileSidenavComponent,
    MobileSidenavButtonComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
  ],
  providers: [
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
