import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombre:string;
  peso:string;
  simbolo:string;

  constructor() { }

  ngOnInit(): void {
  }

  

}
