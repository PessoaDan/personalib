import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bg: string  = 'url(assets/images/bg-login.jpg)'; 
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.route.navigate([''])
  }
}
