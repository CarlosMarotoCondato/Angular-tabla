import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tabla';

  booleano:boolean;

  addItem(newItem: string) {
    this.booleano = !this.booleano;
  }
}
