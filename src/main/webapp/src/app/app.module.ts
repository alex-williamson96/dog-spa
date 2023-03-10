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
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AppHomeComponent } from './app/app-pages/app-home/app-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './pages/login-page/register-page/register-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { PhoneNumberInputComponent } from './pages/login-page/register-page/phone-number-input/phone-number-input.component';
import { PhoneFormComponent } from './pages/login-page/register-page/phone-form/phone-form.component';
import { httpInterceptorProviders } from './_helpers/auth.interceptors';
import { BoardingComponent } from './app/app-pages/boarding/boarding.component';
import { DaycareComponent } from './app/app-pages/daycare/daycare.component';
import { GroomingComponent } from './app/app-pages/grooming/grooming.component';
import { SignInComponent } from './toolbar/sign-in/sign-in.component';
import { ProfileComponent } from './app/app-pages/profile/profile.component';
import { CreateDogCardComponent } from './app/app-pages/app-home/create-dog-card/create-dog-card.component';
import { CreateCustomerCardComponent } from './app/app-pages/app-home/create-customer-card/create-customer-card.component';
import { DogLookupCardComponent } from './app/app-pages/app-home/dog-lookup-card/dog-lookup-card.component';
import { CustomerLookupCardComponent } from './app/app-pages/app-home/customer-lookup-card/customer-lookup-card.component';
import { DashboardCardComponent } from './app/app-pages/app-home/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { LookupComponent } from './app/app-pages/lookup/lookup.component';
import { CreateComponent } from './app/app-pages/create/create.component';
import { DogCreateComponent } from './app/app-pages/create/dog-create/dog-create.component';
import { CustomerCreateComponent } from './app/app-pages/create/customer-create/customer-create.component';
import { CustomerLookupComponent } from './app/app-pages/lookup/customer-lookup/customer-lookup.component';
import { DogLookupComponent } from './app/app-pages/lookup/dog-lookup/dog-lookup.component';
import { CustomerTableComponent } from './app/app-pages/lookup/customer-lookup/customer-table/customer-table.component';
import { DogTableComponent } from './app/app-pages/lookup/dog-lookup/dog-table/dog-table.component';
import { CustomerOverviewPageComponent } from './app/app-pages/customer-overview/customer-overview-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

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
    ProfileComponent,
    CreateDogCardComponent,
    CreateCustomerCardComponent,
    DogLookupCardComponent,
    CustomerLookupCardComponent,
    DashboardCardComponent,
    LookupComponent,
    CreateComponent,
    DogCreateComponent,
    CustomerCreateComponent,
    CustomerLookupComponent,
    DogLookupComponent,
    CustomerTableComponent,
    DogTableComponent,
    CustomerOverviewPageComponent
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
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
