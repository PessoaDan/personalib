import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public isLoggedIn(): boolean {

    if( window.localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
