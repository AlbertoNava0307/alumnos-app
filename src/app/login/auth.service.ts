import { Injectable } from '@angular/core';
import { Observable, of, throwError } from'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string;
  private urlEndPoint: string = 'http://localhost:8080/admin/login';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient, private router: Router) { }

  public get token(): string{
    if(this._token!=null){
      return this._token;
    }else if(this._token==null && sessionStorage.getItem('token')!=null){
      this._token = sessionStorage.getItem('token');
      return this._token;
    }return null
  }

  login(admin):Observable<any>{
    return this.httpClient.post<any>(this.urlEndPoint, admin, {headers: this.httpHeaders})
  }

  logout():void{
    this._token = null;
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  guardarToken(token: string):void{
    this._token = token;
    sessionStorage.setItem('token', token);
  }

  isAuth(){
    if(this.token!=null){
      return true
    }else{
      return false
    }
  }
}
