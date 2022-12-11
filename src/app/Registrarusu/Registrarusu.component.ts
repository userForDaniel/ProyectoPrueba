import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Registrarusu',
  templateUrl: './Registrarusu.component.html',

  styleUrls: ['./Registrarusu.component.css']
})
export class RegistrarusuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      
  }
  test : Date = new Date();
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  focus6;
  focus7;
  focus8;

  public logo: string="https://media.discordapp.net/attachments/998267614935646249/1043275133000896645/logo.webp";
  public btn: string="REGISTRARME";

}
