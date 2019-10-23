import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  login(): void {
    this.loggedIn.next(true);
  }
  logout(): void {
    this.loggedIn.next(false);
  }
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
