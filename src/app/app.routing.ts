import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

import { HomeComponent } from './home/home.component';
import { RegistrarusuComponent } from './Registrarusu/Registrarusu.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import {AdminLayoutModule} from '../app/layouts/admin-layout/admin-layout.module'

const routes: Routes =[
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'login' ,               component:LoginComponent},
  { path: 'register' ,              component:RegistrarusuComponent},
  { path: 'home' ,               component:HomeComponent},
  { path: '**',  component: PageNotFoundComponent},

  
 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AdminLayoutModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
