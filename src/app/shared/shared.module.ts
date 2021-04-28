import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AplicationComponent } from './components/aplication/aplication.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { WellcomeComponent } from './components/layout/wellcome/wellcome.component';


@NgModule({
  declarations: [
    AplicationComponent,
    NavbarComponent,
    WellcomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule
  ]
})
export class SharedModule { }
