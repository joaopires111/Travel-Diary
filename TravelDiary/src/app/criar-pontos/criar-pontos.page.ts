import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ponto, StorageService } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-criar-pontos',
  templateUrl: './criar-pontos.page.html',
  styleUrls: ['./criar-pontos.page.scss'],
})
export class CriarPontosPage {

  pontos: Ponto[] = [];

  newPonto: Ponto = <Ponto>{}
  
//Lista
  @ViewChild('myList')myList: IonList;
  
  constructor(private router: Router, private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      this.loadPontos();
    })
   }

//adicionar ponto
   addPonto(){
     this.newPonto.id = Date.now();

     this.storageService.addPonto(this.newPonto).then(ponto => {
       this.newPonto = <Ponto>{};
       this.showToast('Ponto de Interesse criado');
       this.loadPontos();
     });
     this.router.navigate(['pdi']);
   }
//atualizar pontos
   loadPontos(){
     this.storageService.getPontos().then(pontos => {
       this.pontos = pontos;
     })
   };

//colocar um toast
   async showToast(msg){
     const toast = await this.toastController.create({
       message: msg,
       duration: 2000
     });
     toast.present();
   }

//voltar à pagina principal dos pontos de interesse
  voltar(){
    this.router.navigate(['pdi']);
  }

//verificar a condição de um botão
  verificar(){
    if(this.newPonto.lugar != undefined && this.newPonto.nome != undefined && this.newPonto.tipo != undefined)
      return !(this.newPonto.nome.length >= 2 && this.newPonto.lugar.length >= 2 && this.newPonto.tipo != "");
    return true;
  }
}
