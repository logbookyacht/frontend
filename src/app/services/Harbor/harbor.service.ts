import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Harbor } from 'src/app/models/Harbor/harbor';
import { RequestOptions, Headers } from '@angular/http'; 
import { User } from 'src/app/models/User/user';

@Injectable({
  providedIn: 'root'
})
export class HarborService {

  apiUrl = 'http://localhost:8090'

  constructor(private http: HttpClient) { }

  add(harbor: Harbor){
    var headers = new Headers();
    headers.append('Content-Type','application/json')
    var options = new RequestOptions({headers: headers});
    return this.http.post(`${this.apiUrl}/Harbor/`,JSON.stringify(harbor))
  }
  
  getByUser(user: User){
    return this.http.get<any>(`${this.apiUrl}/users/${user.id}/Harbor`)
  }
  
  getAll() {
    return this.http.get<Harbor[]>(`${this.apiUrl}/Harbor`)
  }
  
  getById(id: number){
    return this.http.get(`${this.apiUrl}/Harbor/${id}`)
  }
  
  update(harbor: Harbor) {
    return this.http.put(`${this.apiUrl}/Harbor/${harbor.id}`, harbor);
  }
  
  delete(id: number) {
      return this.http.delete(`${this.apiUrl}/Harbor/${id}`);
  }
}
