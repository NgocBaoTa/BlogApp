import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isSignUpActive: boolean = true;
  isSignInActive: boolean = false;

  toggleForms() {
    this.isSignUpActive = !this.isSignUpActive;
    this.isSignInActive = !this.isSignInActive;
  }
}
