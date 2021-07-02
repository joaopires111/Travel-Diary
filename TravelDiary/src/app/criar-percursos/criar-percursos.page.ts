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

//Listas
  @ViewChild('myList')myList: IonList;//para colocar os Pontos para serem selecionados
  @ViewChild('myList1')myList1: IonList;//para colocar os Pontos para serem selecionados
  
  constructor(private router: Router, private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      this.loadPontos();
      this.loadPercursos();
    })
   }
//adicionar percurso
  addPercurso(){
    this.storageService.getPontos().then(pontos => {
      this.searchPontos(this.nomes, pontos);
       this.newPercurso.id = Date.now();

      this.storageService.addPercurso(this.newPercurso).then(percurso => {
        
          this.newPercurso = <Percurso>{};
          this.showToast('Percurso adicionado');
          this.loadPercursos(); 
      })
    });
    this.router.navigate(['percursos']);
  }
//atualizar percursos
    loadPercursos(){
    this.storageService.getPercursos().then(percursos => {
      this.percursos = percursos;
      });
    }

//atualizar pontos
   loadPontos(){
     this.storageService.getPontos().then(pontos => {
       this.pontos = pontos;
       console.log(pontos[0].lugar);
     })
   }

//colocar um toast
   async showToast(msg){
     const toast = await this.toastController.create({
       message: msg,
       duration: 2000
     });
     toast.present();
   }

//voltar para a pagina principal de percursos
  voltar(){
    this.router.navigate(['percursos']);
  }

//procura o ponto com aquele nome, varias vezes
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
