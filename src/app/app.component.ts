import { Component } from '@angular/core';
import { AF } from "./providers/af";
import { Router, ActivatedRoute,NavigationStart } from "@angular/router";
import { AngularFireAuth  } from 'angularfire2/auth';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;
  public email: string;
  public ruta: string;

constructor(public afService: AF, private router: Router,private activatedRoute: ActivatedRoute,public afAuth: AngularFireAuth){
       this.router.events.subscribe((url:any) => {
         this.ruta = url.url;
         this.ruta = this.ruta.substr(1);
       });



       this.afService.user1.subscribe(  (auth) => {
        if(auth == null) {
   //       console.log("No esta logueado");
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        } else {
    //      console.log("Correcto.");
          this.afService.uid = auth.uid;
          this.afService.email = auth.email;
          this.email =  auth.displayName;
          this.isLoggedIn = true;
          this.router.navigate(['votar']);
         }
      }
    );
  }

  /**Termina constructor**/

/**Cierra la sesion constructor**/
 logout() {
    this.afService.logout();
  }

}
