import { AppointmentPageComponent } from './pages/appointment-page/appointment-page.component';
import { ProfileHomeComponent } from './pages/profile-home/profile-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'profile-home',component:ProfileHomeComponent},
  {path:'appointment',component:AppointmentPageComponent},
  {path:'**', pathMatch:'full', redirectTo:'profile-home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
