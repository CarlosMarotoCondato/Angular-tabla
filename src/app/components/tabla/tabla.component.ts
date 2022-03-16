import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Elementos } from '../../services/elemento';
import { ElementosService } from '../../services/elementos.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit {
  
  elementos: Elementos[] = [] ;

  constructor(private elementosService:ElementosService) { 
    
  }

  ngOnInit(): void {
    this.elementos=this.elementosService.elementos;
    console.log(this.elementos);
  }

  displayedColumns: string[] = ['posicion', 'nombre', 'peso', 'simbolo'];
  dataSource = new MatTableDataSource(this.elementos);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
