import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.model.role = 'user';
  }

  login() {
    if (this.model.username && this.model.password) {
      this.validate(); 
    } else {
      alert("Either of Username / Password is NULL");
    }
  }

  validate() {
    // this.flightService.userLogin(this.model.username, this.model.password).subscribe((res: any) => {
    //   console.log('The user obj is ', res);
    //   this.flightService.user = res;
      if (this.model.username === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        alert("invalid login credentials")
      }
   
}
}
