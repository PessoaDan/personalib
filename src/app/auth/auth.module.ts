import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RecoveryComponent } from './components/recovery/recovery.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecoveryComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
