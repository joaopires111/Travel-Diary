import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular'

import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,

    private _location: Location,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });

  }

  showExitConfirm() {
    this.alertController.create({
      header: 'Saida',
      message: 'Quer fechar a app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Ficar',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Sair',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }

}
