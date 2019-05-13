import { Component } from '@angular/core';
import { ApiService } from './_shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../app/_shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logbook';

  constructor(public apiService:ApiService, private route: ActivatedRoute, private router: Router) { }

  getUser(){
    console.log("Kaas")
    this.apiService.getUsers().subscribe((res:any)=>{
      console.log(typeof (res.content as User[]));
    });
  }

  ngOnInit(){
    console.log("naampie")
    this.apiService.getUsers().subscribe((res:any)=>{
      console.log(typeof (res.content as User[]));
      
    });

  }

}
