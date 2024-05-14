import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customerFrontEnd';

  constructor(private router: Router) {
  }

  public currentRoute: any = "home";

  GoToHome() {
    this.currentRoute = "home";
    this.router.navigateByUrl("/home");
  }

  GoToClients() {
    this.currentRoute = "products";
    this.router.navigateByUrl("/clients");
  }
}
