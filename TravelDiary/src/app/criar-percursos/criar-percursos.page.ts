import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ponto, StorageService } from '../services/storage.service';

@Component({
  selector: 'app-criar-percursos',
  templateUrl: './criar-percursos.page.html',
  styleUrls: ['./criar-percursos.page.scss'],
})
export class CriarPercursosPage {
  constructor(private router: Router) { }

  
  criar(){
    //adicionar ao grupo de percursos
  }

  voltar(){
    this.router.navigate(['percursos']);
  }
}
