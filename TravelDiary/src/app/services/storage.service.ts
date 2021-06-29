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

  getPontos() : Promise<Ponto[]>{
    return this.storage.get(PONTO_KEY);
  }

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

  deletePonto(id: number) : Promise<any>{
    return this.storage.get(PONTO_KEY).then((pontos: Ponto[]) =>{
      if(!pontos || pontos.length === 0){
        return null;
      }
      let toKeep: Ponto[];
      for(let i of pontos){
        if(i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(PONTO_KEY, toKeep);
    });
  }

  addPercurso(percurso: Percurso): Promise<any>{
    return this.storage.get(PONTO_KEY).then((percursos: Percurso[]) =>{
      if(percursos){
        percursos.push(percurso);
        return this.storage.set(PONTO_KEY, percursos);
      }else{
        return this.storage.set(PONTO_KEY, [percurso]);
      }
    });
  }

  getPercursos(): Promise<Percurso[]>{
    return this.storage.get(PERCURSO_KEY);
  }

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
      return this.storage.set(PONTO_KEY, newPercursos);
    });
  }

  deletePercurso(id: number): Promise<any>{
    return this.storage.get(PERCURSO_KEY).then((percursos: Percurso[]) =>{
      if(!percursos || percursos.length === 0){
        return null;
      }
      let toKeep: Percurso[];
      for(let i of percursos){
        if(i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(PERCURSO_KEY, toKeep);
    });
  }
}
