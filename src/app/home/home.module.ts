import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './home.component';


import { NavbarComponent } from './components/navbar/navbar.component';





@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
      
        NgbModule
        
        
    ],
    declarations: [ HomeComponent,NavbarComponent],
    exports:[ HomeComponent,NavbarComponent ],
    providers: []
})
export class HomeModule { }
