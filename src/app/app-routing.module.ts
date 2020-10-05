import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScheduleadminComponent } from './scheduleadmin/scheduleadmin.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'admin', component: ScheduleadminComponent },
  { path: 'login', component: LoginComponent }

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
