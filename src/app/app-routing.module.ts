import { WellcomeComponent } from './shared/components/layout/wellcome/wellcome.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationComponent } from './shared/components/aplication/aplication.component';

const routes: Routes = [
  {
   path: "auth",
   loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)  
  },
  {
    path: '',
    component: AplicationComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: WellcomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
