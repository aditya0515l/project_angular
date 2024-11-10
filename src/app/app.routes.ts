import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { BookingconformComponent } from './bookingconform/bookingconform.component';
import { ApplicationConfig } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { BeachesComponent } from './beaches/beaches.component';
import { HeritageComponent } from './heritage/heritage.component';
import { NatureComponent } from './nature/nature.component';
import { TempleComponent } from './temple/temple.component';
import { PackagesComponent } from './packages/packages.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [

    {path:'', component: WelcomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent },
  {path:'packages', component:PackagesComponent},
  {path: 'temple', component: TempleComponent},
  {path:'wildlife', component: WildlifeComponent},
  {path:'beaches', component: BeachesComponent},
  {path:'heritage', component: HeritageComponent},
  {path:'nature', component: NatureComponent},
  {path: 'mybooking', component:MybookingComponent},
  { path: 'vytcy', redirectTo: '/book-tour', pathMatch: 'full' },
  { path: 'booking', component: BookingComponent },
  {path: 'profile' , component: ProfileComponent},
  { path: 'bookingconform', component: BookingconformComponent }
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
