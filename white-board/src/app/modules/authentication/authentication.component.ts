import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  providers = AuthProvider;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigateByUrl('dashboard')
  }

}
