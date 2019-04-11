import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { TripsComponent } from './trips/trips.component';
import { LoginComponent } from './login/login.component';
import  {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'log', component: LogComponent},
  {path: 'trips', component: TripsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
