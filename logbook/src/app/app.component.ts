import { Component } from '@angular/core';
import { ApiService } from './_shared/services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logbook';

  constructor(private apiService: ApiService){}

  getUsers(){
      this.apiService.getUsers().subscribe((res)=>{
        console.log(res);
        });      
  }
}
