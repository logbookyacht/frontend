import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models//User/user';
import { Log } from 'src/app/models/Log/log';
import { LogService } from 'src/app/services/Log/log.service';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
    currentUser: User;
    logs  = [];
   
  constructor(authService: AuthenticationService, private logService: LogService, private router:Router) {
    authService.currentUser.subscribe((x)=> {
      this.currentUser = x;
    });
  }

  async ngAfterViewInit() {

    var pResult = await this.logService.getAll().toPromise() as any
    console.log(pResult)
    for (let i = 0; i < pResult.content.length; i++) {
      var log = pResult.content[i] as Log;
      console.log(log)
      this.logs.push(log)
    }
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

   
  ngOnInit() {
    
  }


}