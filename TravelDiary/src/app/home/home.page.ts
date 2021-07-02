import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;
  password: string;
  
  constructor(private router: Router, private toastController: ToastController) {
    this.username = "";
    this.password = "";
  }
//iniciar a conta(fazer de conta)
  login(){
    this.showToast("Bem vindo" + this.username);
    this.router.navigate(['pdi']);
  }

//verifica a condição para ativa o botao
  verificar(){
      return !(this.username.length > 5 && this.password.length > 7); 
  }

//fazer toast
  async showToast(msg){    
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
