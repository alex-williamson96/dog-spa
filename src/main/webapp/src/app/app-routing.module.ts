import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardingPageComponent } from './pages/boarding-page/boarding-page.component';
import { DaycarePageComponent } from './pages/daycare-page/daycare-page.component';
import { GroomingPageComponent } from './pages/grooming-page/grooming-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppHomeComponent } from './app/app-pages/app-home/app-home.component';
import { BoardingComponent } from './app/app-pages/boarding/boarding.component';
import { DaycareComponent } from './app/app-pages/daycare/daycare.component';
import { GroomingComponent } from './app/app-pages/grooming/grooming.component';
import { ProfileComponent } from './app/app-pages/profile/profile.component';
import { DogCreateComponent } from './app/app-pages/create/dog-create/dog-create.component';
import { CustomerCreateComponent } from './app/app-pages/create/customer-create/customer-create.component';
import { DogLookupComponent } from './app/app-pages/lookup/dog-lookup/dog-lookup.component';
import { CustomerLookupComponent } from './app/app-pages/lookup/customer-lookup/customer-lookup.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'boarding', component: BoardingPageComponent },
  { path: 'daycare', component: DaycarePageComponent },
  { path: 'grooming', component: GroomingPageComponent },

  { path: 'login', component: LoginPageComponent },

  { path: 'register', component: LoginPageComponent },

  { path: 'app/home', component: AppHomeComponent },
  { path: 'app/boarding', component: BoardingComponent },
  { path: 'app/daycare', component: DaycareComponent },
  { path: 'app/grooming', component: GroomingComponent },
  { path: 'app/profile', component: ProfileComponent },
  { path: 'app/create/dog', component: DogCreateComponent},
  { path: 'app/create/customer', component: CustomerCreateComponent},
  { path: 'app/lookup/dog', component: DogLookupComponent},
  { path: 'app/lookup/customer', component: CustomerLookupComponent},

  { path: 'error', redirectTo: 'info/home' },
  { path: '**', redirectTo: 'info/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
