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

  nomes: string[] = [];
  newPontos: Ponto[] = <Ponto[]>{};
  newPercurso: Percurso = <Percurso>{};
  percursos: Percurso[] = [];

  @ViewChild('myList')myList: IonList;//para colocar os Pontos para serem selecionados
  @ViewChild('myList1')myList1: IonList;//para colocar os Pontos para serem selecionados
  
  constructor(private router: Router, private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      this.loadPontos();
      this.loadPercursos();
    })
   }

  addPercurso(){
    this.storageService.getPontos().then(pontos => {
      this.searchPontos(this.nomes, pontos);
       this.newPercurso.id = Date.now();

      this.storageService.addPercurso(this.newPercurso).then(percurso => {
        
          this.newPercurso = <Percurso>{};
          this.showToast('Percurso adicionado');
          this.loadPercursos(); 
          this.myList1.closeSlidingItems();
      })
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

    loadPercursos(){
    this.storageService.getPercursos().then(percursos => {
      this.percursos = percursos;
      });
    }

   loadPontos(){
     this.storageService.getPontos().then(pontos => {
       this.pontos = pontos;
       console.log(pontos[0].lugar);
     })
   }

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

  searchPontos(nomes: string[], pontos: Ponto[]){ 
    this.newPercurso.pontos = [];
    for(let j = 0; j< nomes.length; j++){
      for(let i = 0; i< pontos.length; i++){
        if(nomes[j] == pontos[i].nome)
          this.newPercurso.pontos.push(pontos[i]);  
      }
    }
    console.log(this.newPercurso.pontos);
  }
}
