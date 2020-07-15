import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  nomePortal: string;
  curso: string[];

  // em Angular a injeção de dependecia é feita pelo construtor 
  constructor(private cursosService: CursosService) { 
    this.nomePortal='http://loiane.training';

    // injeção de dependencia= é fazer com q ele forneça uma intancia de classe 
    //var servico = new CursosService();
    this.curso = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
