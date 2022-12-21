import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardingPageComponent } from './pages/boarding-page/boarding-page.component';
import { DaycarePageComponent } from './pages/daycare-page/daycare-page.component';
import { GroomingPageComponent } from './pages/grooming-page/grooming-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path: 'info/home', component: HomePageComponent},
  {path: 'info/boarding', component: BoardingPageComponent},
  {path: 'info/daycare', component: DaycarePageComponent},
  {path: 'info/grooming', component: GroomingPageComponent},

  {path: 'login', component: LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
