import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-percurso',
  templateUrl: './detalhe-percurso.page.html',
  styleUrls: ['./detalhe-percurso.page.scss'],
})
export class DetalhePercursoPage {
  percurso: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.percurso = this.router.getCurrentNavigation().extras.state.percurso;
      }
    });
  }

  voltar(){
    this.router.navigate(["percursos"])
  }
}
