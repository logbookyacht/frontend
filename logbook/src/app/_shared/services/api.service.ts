    
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User} from '../models/user';

// const endpoint = 'http://localhost:8090/';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURI: string = 'http://localhost:8090';

  constructor(private httpClient: HttpClient) { }

  public getUsers(){
    return this.httpClient.get<User[]>(`${this.apiURI}/users`)
  }
  
}