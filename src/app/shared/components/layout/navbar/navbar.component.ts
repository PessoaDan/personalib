import { MenuPermitionsService } from './../../../services/utils/services/menu-permitions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username =  "DANIEL PESSOA";
  showAdminMenuItem: boolean = false;
  isCollapsedCollection: boolean = true;
  isCollapsedRegistrations: boolean = true;


  constructor(
    private router: Router,
    private permitions: MenuPermitionsService 
    ) { }

  ngOnInit(): void {
    if(this.permitions.isAdminOptionAlowed()) {
      this.showAdminMenuItem = true;
    }
  }

  logout() {
    window.localStorage.removeItem('token');
    this.router.navigate(['auth']);
  }

}
