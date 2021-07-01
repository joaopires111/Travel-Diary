import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Percurso, Ponto, StorageService } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-percursos',
  templateUrl: './percursos.page.html',
  styleUrls: ['./percursos.page.scss'],
})
export class PercursosPage {
  percursos: Percurso[] = [];

  @ViewChild('myList1')myList1: IonList;//para colocar um grupo de pontos para inserir no Percurso

  constructor(private router: Router, private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(()=>{
      this.loadPercursos();
      this.myList1.closeSlidingItems();
    })
  }

//gerenciamento do storage
  loadPercursos(){
  this.storageService.getPercursos().then(percursos => {
    this.percursos = percursos;
    this.myList1.closeSlidingItems();
    });
  }

  deletePercurso(percurso: Percurso){
    this.storageService.deletePercurso(percurso.id).then(percursos =>{
      this.showToast('Percurso Removido');
      this.myList1.closeSlidingItems();
      this.loadPercursos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

//routes
  public criarPercurso(){
    this.router.navigate(['criar-percursos']);
  }

  public Pdi(){
    this.router.navigate(["pdi"]);
  }
}
