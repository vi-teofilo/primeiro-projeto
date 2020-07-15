import { Injectable } from '@angular/core';

//quando tiver essa anotação de @Injectable é que vc pode injetar essa classe em outras classes 
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return['Java', 'Ext JS', 'Angular'];
  }
}
