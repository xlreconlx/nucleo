import { Component, OnInit } from '@angular/core';
import {AF} from "./../providers/af";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 public error: any;
 public mensaje:string;
  constructor(public afService: AF, private router: Router) { }

  ngOnInit() {
  }

loginWithFacebook(){
    this.afService.login().then(() => {
     this.router.navigate(['votar']);
     this.mensaje="";
    })
      .catch((error: any) => {
        if (error) {
          console.log(error);
          this.mensaje="Ocurrio un error intenta mas tarde";
         }
      });
  }

}
