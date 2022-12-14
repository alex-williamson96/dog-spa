import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
