import { Component, OnInit } from '@angular/core';
import { Elementos } from '../../services/elemento';
import { ElementosService } from '../../services/elementos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre:string;
  peso:number;
  simbolo:string;
  nElementos:number;
  elemento:Elementos

  constructor(private elementosService: ElementosService) { }

  ngOnInit(): void {
  }

  anadir(){

    this.nElementos = 1 + this.elementosService.getElementos().length;

    this.elemento  = {posicion : this.nElementos, nombre: this.nombre, peso: this.peso, simbolo: this.simbolo};
    console.log(this.nombre);
    console.log(this.peso);
    console.log(this.simbolo);

    this.elementosService.addElemento(this.elemento);
    this.table.renderRows();

  };

}
