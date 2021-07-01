import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ponto, StorageService } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({

  
  selector: 'app-pdi',
  templateUrl: './pdi.page.html',
  styleUrls: ['./pdi.page.scss'],
})


export class PdiPage{
  

  pontos: Ponto[] = [];

  newPonto: Ponto = <Ponto>{}

  @ViewChild('myList')myList: IonList;
  
  constructor(private router: Router, private storageService: StorageService, private plt: Platform, private toastController: ToastController, private alertcontroller: AlertController) {
    this.plt.ready().then(()=>{
      this.myList.closeSlidingItems();
      this.loadPontos();
    })
    
   }

   async presentAlertConfirm(p:Ponto) {
    const alert = await this.alertcontroller.create({
      header: 'Apagar '+p.nome+'?',
      message: 'Deseja apagar este ponto ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { 
            console.log('Confirm cancel');
          }
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            this.deletePonto(p);
            console.log('Confirm delete');
          }
        }
      ]
    });
  await alert.present();
  }

   atualizar(){
    this.showToast('Atualizar Lista de Pontos');
    this.myList.closeSlidingItems();
    this.loadPontos();
   }

   addPonto(){
     this.newPonto.id = Date.now();

     this.storageService.addPonto(this.newPonto).then(ponto => {
       this.newPonto = <Ponto>{};
       this.showToast('Ponto de Interesse criado');
       this.loadPontos();
     })
   }

   loadPontos(){
     this.storageService.getPontos().then(pontos => {
       this.pontos = pontos;
       this.myList.closeSlidingItems();
     })
   };

   updatePonto(ponto: Ponto){
    ponto.lugar = `UPDATED: ${ponto.lugar}`;
    ponto.nome = `UPDATED: ${ponto.nome}`;
    ponto.tipo = `UPDATED: ${ponto.tipo}`;
    
    this.storageService.updatePonto(ponto).then(ponto => {
      this.showToast('Ponto Atualizado');
      this.myList.closeSlidingItems();
      this.loadPontos();
    });
   }

   deletePonto(ponto: Ponto){
     this.storageService.deletePonto(ponto.id).then(ponto =>{
       this.showToast('Ponto Removido');
       this.myList.closeSlidingItems();
       this.loadPontos();
     });
   }

   async showToast(msg){    
     const toast = await this.toastController.create({
       message: msg,
       duration: 2000
     });
     toast.present();
   }

  criarPonto(){
    this.router.navigate(['criar-pontos']);
  }

  public Percurso(){
    this.router.navigate(["percursos"]);
  }

  

}
