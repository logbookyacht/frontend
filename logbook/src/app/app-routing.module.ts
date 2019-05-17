import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { TripsComponent } from './trips/trips.component';
import { LoginComponent } from './login/login.component';
import  {RegisterComponent} from './register/register.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './_shared/services/authguard/authguard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  // {path: '', component: LoginComponent, canActivate:[AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'log', component: LogComponent},
  {path: 'trips', component: TripsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
