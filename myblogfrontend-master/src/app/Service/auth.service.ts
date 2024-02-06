import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  login() {
    console.log('login fucntion called');
    this.loggedIn = true;
  }
  logout() {
    console.log('logout function called');
    this.loggedIn = false;
  }
  isAuthenticated() {
    console.log(this.loggedIn);
    return this.loggedIn;
  }
}
