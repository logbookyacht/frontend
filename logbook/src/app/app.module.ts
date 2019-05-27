import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
<<<<<<< Updated upstream:logbook/src/app/app.module.ts
=======
import { AlertModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home/home.component';
import { TripsComponent } from './components/trips/trips.component';
import { RegisterComponent } from './components/register/register.component';
import { HarborComponent } from './components/harbor/harbor.component';
import { LogComponent } from './components/log/log.component';
import { BoatComponent } from './components/boat/boat/boat.component';
>>>>>>> Stashed changes:src/app/app.module.ts

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { TripsComponent } from './trips/trips.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogComponent,
    TripsComponent,
<<<<<<< Updated upstream:logbook/src/app/app.module.ts
    LoginComponent,
    RegisterComponent
=======
    RegisterComponent,
    HarborComponent,
    LogComponent,
    BoatComponent
>>>>>>> Stashed changes:src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
