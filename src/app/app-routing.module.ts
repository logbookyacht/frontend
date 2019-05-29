import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LogComponent } from './components/log/log.component';
import { TripsComponent } from './components/trips/trips.component';
import { BoatComponent } from './components/boat/boat.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'log', component: LogComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'boat', component: BoatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
