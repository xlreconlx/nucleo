import { Component, OnInit } from '@angular/core';
import {AF} from "./../providers/af";
import {Router} from "@angular/router";
import {FirebaseListObservable} from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth  } from 'angularfire2/auth';
declare var $:any;
declare var Materialize:any;

@Component({
  selector: 'app-votar-page',
  templateUrl: './votar-page.component.html',
  styleUrls: ['./votar-page.component.css']
})
export class VotarPageComponent implements OnInit {
public lstCategorias:FirebaseListObservable<any>;
public lstArtista:FirebaseListObservable<any>;
public idCategoria:string;
public nombre:string;
public idAnterior:string;

  constructor(public af:AF,private fbApp: FirebaseApp,public afAuth: AngularFireAuth) {
     this.lstCategorias = this.af.categorias;
     this.idCategoria="1";
   }

  ngOnInit() {
  	   $('ul.tabs').tabs();
     //  $(".button-collapse").sideNav();
           $('.modal').modal();
       $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) {  },
      onClose: function(el) {  }, 
    }
  );
  }

selectCategoria(uid:string){
	this.idCategoria = uid;
}

saveArtista(event){
	if(this.idCategoria==="1"){
		 this.showToast("Escoja una categoria");
		return;
	}
	var artis = {
        nombre:this.nombre
	};
	this.af.saveArtista(artis,this.idCategoria).then(() => {
       this.showToast("Se ha registrado");
       this.idCategoria="1";
       this.nombre="";
	}).catch((error:any) => {
       this.showToast("Ocurrio un Error");
	});
}

lstArtistas(uid:string){
	if(this.idAnterior===uid){
		return;
	}
  this.idAnterior = uid;
  this.lstArtista = this.af.lstArtistas(uid);
}

votar(uidArtista:string){
// const itemObser = this.af.saveVoto(this.idAnterior,uidArtista,this.af.uid);
// const itemObservable = itemObser.take(1);
 const catRef = this.fbApp.database().ref('votos/'+this.idAnterior+'/'+uidArtista+'/votos');
 catRef.transaction(votos => votos + 1);
 const itemObservable = this.af.af.object('categorias/'+this.idAnterior);
 
 // itemObservable.subscribe(snapshot => {
 //  if(snapshot.val()===null){
  //   itemObser.update({ votos: 1 });
 //  } else{
 //    itemObser.update({ votos: snapshot.val().votos + 1 });
 //   }
  //}); 
}

verVotos(){
  //<a (click)="verVotos()" class="waves-effect waves-green btn-flat">Ver votos</a>
  const itemObser = this.af.af.list('votos', { preserveSnapshot: true}).take(1);
  var total = 0;
  itemObser.subscribe(snapshots => {
    snapshots.forEach(snapshot => {
          snapshot.forEach(snap => {
           total = total + snap.val().votos;      
           const item = this.af.af.object('artistas/'+snapshot.key+'/'+snap.key, { preserveSnapshot: true }).take(1);
            item.subscribe(snaps => {
            console.log("nombre: "+snaps.val().nombre);
            console.log("votos: "+snap.val().votos);
            console.log("___________________________");   
           });       
    });     
    });
    console.log("Total votos: "+total);
    total = 0;
  });
}

validaUser(event,uidArtista:string){
  event.preventDefault();
 const itemUser = this.af.af.object('registeredUsers/'+this.af.uid,{ preserveSnapshot: true });
 const itemObserva = itemUser.take(1);
 itemObserva.subscribe(snapshot => {
  if(snapshot.val()===null){
   this.closeModal("modal1");
   this.showToast("Error de Autenticación");
 }else{
   this.saveUserVoto(uidArtista);
  }
 });
}

saveUserVoto(uidArtista:string){
 const itemObser = this.af.saveUserVoto(this.idAnterior,this.af.uid);
 //const catRef = this.fbApp.database().ref('votouser/'+this.af.uid+'/'+this.idAnterior);
// catRef.transaction(voto => true);

 const itemObservable = itemObser.take(1);
 itemObservable.subscribe(snapshot => {
  if(snapshot.val()===null){
   itemObser.set(true);
   this.votar(uidArtista);
   this.closeModal("modal1");
   this.showToast("Gracias por tu Voto");
 }else{
  this.closeModal("modal1");
  this.showToast("Puedes Votar Mañana Nuevamente");
  }
 });

}

//Muestra una ventana modal por id
showModal(modal,uid:string){
       this.lstArtistas(uid);
     }

//cierra la ventana modal
closeModal(modal){
    $('#'+modal).modal().modal('close');
}

//muestra un texto toast
showToast(texto){
    Materialize.toast(texto, 5000);
}


openSelect(){
	$('select').material_select();
}

}
