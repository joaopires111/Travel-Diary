import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'; 

export interface Ponto{
  id: number,
  nome: string,
  lugar: string,
  tipo: string
}

export interface Percurso{
  id: number,
  nome: string,
  pontos: Ponto[]
}

const PONTO_KEY = 'my-pontos';
const PERCURSO_KEY = 'my-percursos';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

//criar ponto
  addPonto(ponto: Ponto) : Promise<any>{
    return this.storage.get(PONTO_KEY).then((pontos: Ponto[]) =>{
      if(pontos){
        pontos.push(ponto);
        return this.storage.set(PONTO_KEY, pontos);
      }else{
        return this.storage.set(PONTO_KEY, [ponto]);
      }
    });
  }

//obter pontos
  getPontos() : Promise<Ponto[]>{
    return this.storage.get(PONTO_KEY);
  }

//atualizar o ponto
  updatePonto(ponto: Ponto) : Promise<any>{
    return this.storage.get(PONTO_KEY).then((pontos: Ponto[]) =>{
      if(!pontos || pontos.length === 0){
        return null;
      }

      let newPontos: Ponto[] = [];

      for(let i of pontos){
        if(i.id === ponto.id)
        {
          newPontos.push(ponto);
        }else{
          newPontos.push(i);
        }
      }
      return this.storage.set(PONTO_KEY, newPontos);
    });
  }

//eliminar Ponto
  deletePonto(id: number) : Promise<any>{
    return this.storage.get(PONTO_KEY).then((pontos: Ponto[]) =>{
      if(!pontos || pontos.length === 0){
        return null;
      }
      for(let i = 0; i< pontos.length; i++){
        if(pontos[i].id == id)
          pontos.splice(i, 1);
      }
      console.log(pontos)
      
      
      return this.storage.set(PONTO_KEY, pontos);
    });
  }

//criar Percurso
  addPercurso(percurso: Percurso): Promise<any>{
    return this.storage.get(PERCURSO_KEY).then((percursos: Percurso[]) =>{
      if(percursos){
        percursos.push(percurso);
        return this.storage.set(PERCURSO_KEY, percursos);
      }else{
        return this.storage.set(PERCURSO_KEY, [percurso]);
      }
    });
  }

//obter percursos
  getPercursos(): Promise<Percurso[]>{
    return this.storage.get(PERCURSO_KEY);
  }

//atualizar o percurso
  updatePercurso(percurso: Percurso): Promise<any>{
    return this.storage.get(PERCURSO_KEY).then((percursos: Percurso[]) =>{
      if(!percursos || percursos.length === 0){
        return null;
      }

      let newPercursos: Percurso[] = [];

      for(let i of percursos){
        if(i.id === percurso.id)
        {
          newPercursos.push(percurso);
        }else{
          newPercursos.push(i);
        }
      }
      return this.storage.set(PERCURSO_KEY, newPercursos);
    });
  }

//eliminar percurso
  deletePercurso(id: number): Promise<any>{
    return this.storage.get(PERCURSO_KEY).then((percursos: Percurso[]) =>{
      if(!percursos || percursos.length === 0){
        return null;
      }
      for(let i = 0; i<percursos.length; i++){
          if(percursos[i].id == id)
            percursos.splice(i, 1);
        }
      
      return this.storage.set(PERCURSO_KEY, percursos);
    });
  }
}
