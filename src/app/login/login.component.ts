import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: Admin;

  constructor(private authService: AuthService, private router: Router) {
    this.admin = new Admin();
  }

  ngOnInit(): void {
    if(this.authService.isAuth()){
      this.router.navigate(['/inicio']);
    }
  }

  public login(){
    if(this.admin.usuario==null && this.admin.password==null){
      alert("Usuario o contraseña vacias!");
    }else{
      console.log(this.admin);
      this.authService.login(this.admin).subscribe(
        res => {
          this.authService.guardarToken(res.token);
          this.router.navigate(['/inicio'])
        },
        err => {
          alert("Usuario o contraseña incorrectos");
        }
      );
    }
  }

}
