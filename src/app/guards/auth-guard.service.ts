import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  userCurrent;
  private isAuthenticated: boolean = false;

  canActivate() {
    return this.isAuthenticated;
  }

  loginSuccessful(user){
    this.userCurrent = user;
    this.isAuthenticated = true;
  }

  getCurrentUser(){
    return this.userCurrent;
  }
}
