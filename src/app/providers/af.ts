import {Injectable} from "@angular/core";
import {AngularFireDatabase , FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";
import { AngularFireAuth  } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@Injectable()
export class AF {
  public displayName: string;
  public email: string;
  public user: FirebaseObjectObservable<any>;
  public user1: Observable<firebase.User>;
  public categorias: FirebaseListObservable<any>;
  public uid: string;
  public isLogin: boolean;

  constructor(public afAuth: AngularFireAuth,public af: AngularFireDatabase ) {
    this.user1 = afAuth.authState;  
    this.categorias = this.af.list('categorias');
  }
 
 // return this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
 //logea a la persona con la plataforma
 login() {
   return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

//cierra la sesion actual
  logout() {
    this.afAuth.auth.signOut();
  }

//Guarda a el usuario
saveUser(uid:string,correo:string,displayName:string){
  var user = {
     email:correo,
     name:displayName
  };
     this.af.object('registeredUsers/'+uid).set(user);
}

//guarda el artista
saveArtista(artista:any,uidCategoria:string){
  return this.af.list('artistas/'+uidCategoria).push(artista);
}

//lista de artistas
lstArtistas(uidCategoria:string){
  return this.af.list('artistas/'+uidCategoria);
}

//registra voto
saveVoto(uidCategoria:string,uidArtista:string,uidUser:string){
  return this.af.object('votos/'+uidCategoria+"/"+uidArtista,{ preserveSnapshot: true });
}

 //if(snapshot.val()===null){
 //   itemObservable.update({ votos: 0 });
  //} else{
  //    itemObservable.update({ votos: snapshot.val().votos + 1 });
  //    console.log("registro voto");
 // }
  //});

//registra voto usuario
saveUserVoto(uidCategoria:string,uidUser:string){
  return this.af.object('votouser/'+uidUser+"/"+uidCategoria,{ preserveSnapshot: true });
}

}