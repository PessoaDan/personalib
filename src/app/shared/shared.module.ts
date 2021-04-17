import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AplicationComponent } from './components/aplication/aplication.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';


@NgModule({
  declarations: [
    AplicationComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
