import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth  } from 'angularfire2/auth';

@Injectable()
export class CA implements CanActivate {

  constructor(public afAuth: AngularFireAuth) {}

  canActivate() {
    if(this.afAuth.auth.currentUser!=null){
    	return false;
    }
  	return true;
  }

}