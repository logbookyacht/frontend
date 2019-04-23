import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

import { tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:8090';

  public nextPage: string = "";
  
  constructor(private httpClient: HttpClient) { }

  public getUsers(){
    return this.httpClient.get<User[]>(`${this.apiURL}/user`)
  }

}
