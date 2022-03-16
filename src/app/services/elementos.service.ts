import { Injectable } from '@angular/core';
import { Elementos } from './elemento'

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  elementos: Elementos[] = [
    {posicion: 1, nombre: 'Hydrogen', peso: 1.0079, simbolo: 'H'},
    {posicion: 2, nombre: 'Helium', peso: 4.0026, simbolo: 'He'},
    {posicion: 3, nombre: 'Lithium', peso: 6.941, simbolo: 'Li'},
    {posicion: 4, nombre: 'Beryllium', peso: 9.0122, simbolo: 'Be'},
    {posicion: 5, nombre: 'Boron', peso: 10.811, simbolo: 'B'},
    {posicion: 6, nombre: 'Carbon', peso: 12.0107, simbolo: 'C'},
    {posicion: 7, nombre: 'Nitrogen', peso: 14.0067, simbolo: 'N'},
    {posicion: 8, nombre: 'Oxygen', peso: 15.9994, simbolo: 'O'},
    {posicion: 9, nombre: 'Fluorine', peso: 18.9984, simbolo: 'F'},
    {posicion: 10, nombre: 'Neon', peso: 20.1797, simbolo: 'Ne'},
  ];

  constructor() { }
}
