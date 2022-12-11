import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/models/Usuario.model';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public logo: string="https://media.discordapp.net/attachments/998267614935646249/1043275133000896645/logo.webp";
  public btn: string="INICIAR SESION";

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  iniciarSesion(){
    
    this.authService.login(this.usuario).subscribe({
      next: (resp: any) => {
        // Get Token
        let token: string = resp.headers.get('Authorization');
        this.authService.getPayloadToken(token);
        // Obtener solo el token y quitar el Bearer
        token = token.replace('Bearer ', '')
        localStorage.setItem('token', token)
        this.router.navigate(['/admin-panel']);
        Swal.fire(
          'Bienvenido!',
          'Al sistema..!',
          'success'
        )
      },
      error: (err) => {
        console.log(err);
        Swal.fire(
          'Error!',
          'Credenciales incorrectas..!',
          'error'
        )
        
      }
    })

  }

}
