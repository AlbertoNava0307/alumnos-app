import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { AlumnoService } from './alumno.service';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  alumno: Alumno = new Alumno();
  constructor(private alumnoService: AlumnoService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(!this.authService.isAuth()){
      this.router.navigate(['/login']);
    }
  }

  public create(){
    this.alumnoService.create(this.alumno).subscribe(
      res => this.router.navigate(['/alumnos'])
    )
  }
}
