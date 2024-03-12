import { Routes } from '@angular/router';


export const routes: Routes = [
{
    path:'dashboard',  loadComponent: () => import('./shared/dashboard/dashboard.component'),
    children: [
      {
        path: 'https://localhost:4200/signin-oidc',
        title: 'signin-oidc',
        loadComponent: () => import('../app/shared/signin-oidc/signin-oidc.component')
      },
      {
        path:'', redirectTo: 'dashboard', pathMatch: 'full',
      }
    ]
  },
  { path:'', redirectTo:'/dashboard', pathMatch:'full'},
  ];