import { Component } from '@angular/core';
import { ApiService } from './_shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logbook';

  constructor(public apiService:ApiService, private route: ActivatedRoute, private router: Router) { }

  Login(){
      this.apiService.login().subscribe((data)=>{
        console.log(data);
        });      
  }
}
