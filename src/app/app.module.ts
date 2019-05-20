import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home/home.component';
import { TripsComponent } from './components/trips/trips.component';
import { RegisterComponent } from './components/register/register.component';
import { HarborComponent } from './components/harbor/harbor.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TripsComponent,
    RegisterComponent,
    HarborComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }