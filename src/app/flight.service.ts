import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  public user: any;

  constructor(private http: HttpClient) { }

  addSchedule(body) {
    return this.http.post('http://localhost:8530/addFlightSchedule',body)
  }
  getAllSchedules(){
    return this.http.get('http://localhost:8530/viewFlightSchedule');
  }
  searchSchedule(scheduleId){
    return this.http.get('http://localhost:8530/viewFlightSchedule/'+ scheduleId)
  }

  deleteSchedule(scheduleId) {
    return this.http.delete('http://localhost:8530/deleteFlightSchedule/' + scheduleId);
  }

  searchFlight(flightNumber) {
    return this.http.get('http://localhost:8530/getFlight/' + flightNumber);
  }

  getAirport(airportCode){
    return this.http.get('http://localhost:8530/getAirport/' + airportCode);
  }

}
