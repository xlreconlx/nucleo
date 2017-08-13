import { Component, OnInit } from '@angular/core';
import {AF} from "./../providers/af";
import {Router} from "@angular/router";
import {FirebaseListObservable} from 'angularfire2/database';
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

  constructor(public af:AF) {
     this.lstCategorias = this.af.categorias;
     this.idCategoria="1";
   }

  ngOnInit() {
  	   $('ul.tabs').tabs();
     //  $(".button-collapse").sideNav();
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
 const itemObser = this.af.saveVoto(this.idAnterior,uidArtista,this.af.uid);
 const itemObservable = itemObser.take(1);

  itemObservable.subscribe(snapshot => {
   if(snapshot.val()===null){
     itemObser.update({ votos: 0 });
   } else{
     itemObser.update({ votos: snapshot.val().votos + 1 });
    }
  }); 
}

saveUserVoto(event,uidArtista:string){
 event.preventDefault();
 const itemObser = this.af.saveUserVoto(this.idAnterior,this.af.uid);
 const itemObservable = itemObser.take(1);
 itemObservable.subscribe(snapshot => {
  if(snapshot.val()===null){
    itemObser.set(true);
    this.votar(uidArtista);
    this.closeModal("modal1");
    this.showToast("Gracias por tu Voto");
  }else{
    this.closeModal("modal1");
    this.showToast("Ya has Votado en esta Categoria, intenta Mañana nuevamente");
  }
  
  });
}

//Muestra una ventana modal por id
showModal(modal,uid:string){
       this.lstArtistas(uid);
       $('#'+modal).modal().modal('open');
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
