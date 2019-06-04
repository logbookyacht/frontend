import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component';
import { LogComponent } from './components/log/log.component';
import { TripsComponent } from './components/trips/trips.component';
import { BoatComponent } from './components/boat/boat.component';
import { HarborComponent } from './components/harbor/harbor.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'log', component: LogComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'boat', component: BoatComponent},
  { path: 'harbor', component: HarborComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
