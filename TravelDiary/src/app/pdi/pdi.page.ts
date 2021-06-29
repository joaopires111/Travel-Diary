import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdi',
  templateUrl: './pdi.page.html',
  styleUrls: ['./pdi.page.scss'],
})
export class PdiPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  criarPonto(){
    this.router.navigate(['criar-pontos']);
  }

  public Percurso(){
    this.router.navigate(["percursos"]);
  }
}
