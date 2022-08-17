import { Injectable } from '@angular/core';
import { Alumno } from './alumno';
import { Observable, of, throwError } from'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map/*, catchError*/ } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private urlEndPoint: string = 'http://localhost:8080/alumnos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Alumno[]>{
    //return of(ALUMNOS);
    return this.http.get(this.urlEndPoint).pipe(
      map( response => response as Alumno[] )
    );
  }

  create(alumno: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(this.urlEndPoint, alumno, {headers: this.httpHeaders});
  }
}
