import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { User } from 'src/app/models/User/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  apiUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
     return this.currentUserSubject.value;
   }

   login(email: string, password: string) {
     return this.http.post<any>(`${this.apiUrl}/users/login`,{email: email,password:password})
      .pipe(map(user => {
        if(user) {
          localStorage.setItem('currentUser', JSON.stringify(user))
        }
        return user;
      }))
   }

   logout(){
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null)
   }
}
