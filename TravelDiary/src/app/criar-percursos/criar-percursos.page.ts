import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Percurso, Ponto, StorageService } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-criar-percursos',
  templateUrl: './criar-percursos.page.html',
  styleUrls: ['./criar-percursos.page.scss'],
})
export class CriarPercursosPage {
  pontos: Ponto[] = [];
  newPonto: Ponto = <Ponto>{};

  newPontos: Ponto[] = [];
  newPercurso: Percurso = <Percurso>{};

  @ViewChild('myList')myList: IonList;
  
  constructor(private router: Router, private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      this.loadPontos();
    })
   }

   /*addPonto(){
     this.newPonto.id = Date.now();

     this.storageService.addPonto(this.newPonto).then(ponto => {
       this.newPonto = <Ponto>{};
       this.showToast('Ponto de Interesse criado');
       this.loadPontos();
     })
   }*/

   loadPontos(){
     this.storageService.getPontos().then(pontos => {
       this.pontos = pontos;
       console.log(pontos[0].lugar);
     })
   };

   /*updatePonto(ponto: Ponto){
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
   }*/

   async showToast(msg){
     const toast = await this.toastController.create({
       message: msg,
       duration: 2000
     });
     toast.present();
   }

  
  criar(){
    //adicionar ao grupo de percursos
  }

  voltar(){
    this.router.navigate(['percursos']);
  }
}
