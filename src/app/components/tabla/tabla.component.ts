import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Elementos } from '../../services/elemento';
import { ElementosService } from '../../services/elementos.service';
import { Subscription } from 'rxjs';

const ELEMENT_DATA : Elementos[] = [];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit {
  
  elementos: Elementos[] = [] ;
 
  @ViewChild(MatTable) table: MatTable<Elementos>;

  recargar(){
    this.table.renderRows();
  }
  
  constructor(private elementosService:ElementosService) { 
    // this.elementosService.recargarElementos().subscribe(()=>{
    //   this.recargar();
    //   })
  }

  ngOnInit(): void {
    this.elementos=this.elementosService.getElementos();
    this.dataSource = new MatTableDataSource<Elementos>(this.elementos)
  }

  displayedColumns: string[] = ['posicion', 'nombre', 'peso', 'simbolo'];
  dataSource = new MatTableDataSource<Elementos>(this.elementos);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
