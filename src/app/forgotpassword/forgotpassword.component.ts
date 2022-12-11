import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  focus;
  focus1;
  focus2;
  focus3;

  public logo: string="https://media.discordapp.net/attachments/998267614935646249/1043275133000896645/logo.webp";

  public btn: string="ENVIAR";

  correo: string;
  constructor() { }

  ngOnInit(): void {
  }

}
