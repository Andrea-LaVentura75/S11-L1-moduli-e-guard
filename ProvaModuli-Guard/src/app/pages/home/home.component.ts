import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private loginSvc: LoginService) {}
  login() {
    this.loginSvc.accesso();
  }
}
