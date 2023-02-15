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
import { AppHomeComponent } from './app/app-pages/app-home/app-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './pages/login-page/register-page/register-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PhoneNumberInputComponent } from './pages/login-page/register-page/phone-number-input/phone-number-input.component';
import { PhoneFormComponent } from './pages/login-page/register-page/phone-form/phone-form.component';
import { httpInterceptorProviders } from './_helpers/auth.interceptors';
import { BoardingComponent } from './app/app-pages/boarding/boarding.component';
import { DaycareComponent } from './app/app-pages/daycare/daycare.component';
import { GroomingComponent } from './app/app-pages/grooming/grooming.component';
import { SignInComponent } from './toolbar/sign-in/sign-in.component';
import { ProfileComponent } from './app/app-pages/profile/profile.component';

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
    AppHomeComponent,
    RegisterPageComponent,
    PhoneNumberInputComponent,
    PhoneFormComponent,
    BoardingComponent,
    DaycareComponent,
    GroomingComponent,
    SignInComponent,
    ProfileComponent
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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
