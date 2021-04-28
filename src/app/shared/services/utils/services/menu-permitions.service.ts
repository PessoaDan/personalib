import { LoginService } from './../../../../auth/services/login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuPermitionsService {

  constructor( private auth: LoginService ) {

   }
  isAdminOptionAlowed(): boolean{
    const UserData= window.localStorage.getItem('user-data');
      if(UserData && this.auth.isLoggedIn()){
        const user = JSON.parse(UserData);
      console.log(user);
        if(user.admin) {
          return true;
        }
      }
      return false;   
    } 
  }
