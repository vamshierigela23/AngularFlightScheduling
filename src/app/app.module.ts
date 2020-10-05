import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { ScheduleadminComponent } from './scheduleadmin/scheduleadmin.component';
import { SearchscheduleComponent } from './searchschedule/searchschedule.component';
import { UpdateScheduleComponent } from './updateschedule/updateschedule.component';
import { FlightService } from './flight.service';
import { DatePipe } from '@angular/common';
import { Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  //{ path: 'add', component: AddscheduleComponent },
  { path: 'admin', component: ScheduleadminComponent },
  //{ path: 'search', component:  SearchscheduleComponent},
  //{ path: 'update', component: UpdateScheduleComponent },
  
  
];
@NgModule({
  declarations: [
    AppComponent,
    AddscheduleComponent,
    ScheduleadminComponent,
    SearchscheduleComponent,
    UpdateScheduleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    FlightService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
