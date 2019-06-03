import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http'; 
import { Log } from 'src/app/models/Log/log';
import { User } from 'src/app/models/User/user';

@Injectable({
  providedIn: 'root'
})
export class LogService {

apiUrl = 'http://localhost:8090'

constructor(private http: HttpClient) { }

add(log: Log){
  var headers = new Headers();
  headers.append('Content-Type','application/json')
  var options = new RequestOptions({headers: headers});
  return this.http.post(`${this.apiUrl}/Log/`,JSON.stringify(log))
}

getByUser(user: User){
  return this.http.get<any>(`${this.apiUrl}/users/${user.id}/Log`)
}

getAll() {
  return this.http.get<Log[]>(`${this.apiUrl}/Log`)
}

getById(id: number){
  return this.http.get(`${this.apiUrl}/Log/${id}`)
}

update(log: Log) {
  return this.http.put(`${this.apiUrl}/Log/${log.id}`, log);
}

delete(id: number) {
    return this.http.delete(`${this.apiUrl}/Log/${id}`);
}
}