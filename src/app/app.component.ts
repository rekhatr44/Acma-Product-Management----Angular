import { Component } from '@angular/core';

@Component({
  
  selector: 'pm-root',
  template:`
  <h1 style="text-align:center">Acma Product Management</h1> 
  <div style="left-padding:200px"> 
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <ul class='nav nav-pills'>
  <li><a class='nav-link' routerLink='/welcome'>Home</a><li>
  <li><a class='nav-link' routerLink='/products'>Product List</a></li></ul>
  </nav>
  </div>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent {
  title: string = "apm";
  pageTitle: string = "Acma Product Management";
}
