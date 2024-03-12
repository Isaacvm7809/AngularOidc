import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ MatButtonModule, MatMenuModule, MatIconModule, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  oidc: OidcSecurityService = inject(OidcSecurityService);

  ngOnInit(): void {
 //   this.oidc
 //     .checkAuth()
      //.subscribe((loginResponse: LoginResponse) => {
//        const { isAuthenticated, userData, accessToken, idToken, configId } =
          //loginResponse;
          //console.log(userData);
          //console.log(idToken);
      //});
  }

  login() {
    console.log('Login');
    this.oidc.authorize();
  }

  logout() {
    this.oidc
    .logoff()
    .subscribe((result) => console.log(result));
  }
  

}
