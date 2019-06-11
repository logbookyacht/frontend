import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models//User/user';
import { Log } from 'src/app/models/Log/log';
import { Boat } from 'src/app/models/Boat/boat';
import { BoatService } from 'src/app/services/boat/boat.service';
import { LogService } from 'src/app/services/Log/log.service';
import { AuthenticationService } from 'src/app/services/AuthenticationService/authentication-service.service';
import { Router } from '@angular/router';
import { HarborService } from 'src/app/services/Harbor/harbor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User = new User();
  logs  = [];
  boats = [];
  harbors = [];
 
constructor(authService: AuthenticationService, private logService: LogService, private boatService: BoatService, private harborService: HarborService, private router:Router) {
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
  var bResult = await this.boatService.getAll().toPromise() as any
  for (let i = 0; i < 1; i++) {
    var boat = bResult.content[i] as Boat;
    console.log(boat)
    this.boats.push(boat)
  }
  var hResult = await this.harborService.getAll().toPromise() as any
  for (let i = 0; i < bResult.content.length; i++) {
    var harbor = hResult.content[i] as Boat;
    console.log(harbor)
    this.harbors.push(harbor)
  }
  localStorage.setItem('boats', JSON.stringify(this.logs));
}

 
ngOnInit() {
  
}


}
