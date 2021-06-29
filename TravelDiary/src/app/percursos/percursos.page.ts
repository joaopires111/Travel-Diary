import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-percursos',
  templateUrl: './percursos.page.html',
  styleUrls: ['./percursos.page.scss'],
})
export class PercursosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public criarPercurso(){
    this.router.navigate(['criar-percursos']);
  }

  public Pdi(){
    this.router.navigate(["pdi"]);
  }
}
