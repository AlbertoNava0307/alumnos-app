import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { AlumnoService } from './alumno.service';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html'
})
export class AlumnosComponent implements OnInit {

  alumnos: Alumno[];
  constructor(private alumnoService: AlumnoService, private authService: AuthService, private router: Router) { }

  ngOnInit(){
    if(!this.authService.isAuth()){
      this.router.navigate(['/login']);
    }
    this.alumnoService.getAlumnos().subscribe(
      clientes => this.alumnos = clientes
    );
  }

}
