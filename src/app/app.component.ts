import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SetTitleinAngular';
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private serviceTitle: Title, private router:Router){

  }
  setTitleHome(){
    this.serviceTitle.setTitle("Home");
    this.router.navigateByUrl("/home");
  }
  setTitleLogin(){
    this.serviceTitle.setTitle("Login" +" | " +this.title);
    this.router.navigateByUrl("/login");
  }
  setTitleRegister(){
    this.serviceTitle.setTitle("Register" +" | " +this.title);
    this.router.navigateByUrl("/register");
  }
}
