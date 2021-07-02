import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Percurso, Ponto, StorageService } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-percursos',
  templateUrl: './percursos.page.html',
  styleUrls: ['./percursos.page.scss'],
})
export class PercursosPage {
  percursos: Percurso[] = [];

  @ViewChild('myList1')myList1: IonList;//para colocar um grupo de pontos para inserir no Percurso

  constructor(private router: Router, private storageService: StorageService, private plt: Platform, private toastController: ToastController, private alertcontroller: AlertController) {
    this.plt.ready().then(()=>{
      this.loadPercursos();
      this.myList1.closeSlidingItems();
    })
  }

//cria um alert
  async presentAlertConfirm(p:Percurso) {
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
            this.deletePercurso(p);
            console.log('Confirm delete');
          }
        }
      ]
    });
  await alert.present();
  }

//gerenciamento do storage
  loadPercursos(){
  this.storageService.getPercursos().then(percursos => {
    this.percursos = percursos;
    this.myList1.closeSlidingItems();
    });
  }

//botão para atualizar os percursos
  atualizar(){
    this.showToast('Atualizar Lista de Pontos');
    this.myList1.closeSlidingItems();
    this.loadPercursos();
  }

//elimina o percurso
  deletePercurso(percurso: Percurso){
    this.storageService.deletePercurso(percurso.id).then(percursos =>{
      this.showToast('Percurso Removido');
      this.myList1.closeSlidingItems();
      this.loadPercursos();
    });
  }

//
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
//nanigationExtras
  public verPercurso(id: number) {
    let navigationExtras: NavigationExtras;
    for(let i = 0; i< this.percursos.length; i++){
      if(this.percursos[i].id == id){
        navigationExtras = {
          state: {
            percurso: this.percursos[i]
          }
        };
        this.router.navigate(['detalhe-percurso'], navigationExtras);
      }
    }
  } 

//routes das tabs
  public criarPercurso(){
    this.router.navigate(['criar-percursos']);
  }

  public Pdi(){
    this.router.navigate(["pdi"]);
  }
  public home(){
    this.router.navigate(["home"]);
  }
}
