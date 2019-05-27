import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http'; 
import { Boat } from 'src/app/models/boat';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

apiUrl = 'http://localhost:8090'

constructor(private http: HttpClient) { }

add(boat: Boat){
  return this.http.post(`${this.apiUrl}/boat`,JSON.stringify(boat))
}

getByUser(user: User){
  return this.http.get<any>(`${this.apiUrl}/users/${user.id}/boat`)
}

getAll() {
  return this.http.get<Boat[]>(`${this.apiUrl}/boat`)
}

getById(id: number){
  return this.http.get(`${this.apiUrl}/boat/${id}`)
}

update(boat: Boat) {
  return this.http.put(`${this.apiUrl}/boat/${boat.id}`, boat);
}

delete(id: number) {
    return this.http.delete(`${this.apiUrl}/boat/${id}`);
}
}