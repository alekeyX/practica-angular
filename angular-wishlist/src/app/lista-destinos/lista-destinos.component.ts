import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinoViaje>;

  destinos: DestinoViaje[];

  constructor() {
    this.destinos = [];
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje) {
    this.destinos.push(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: DestinoViaje) {
    this.destinos.forEach( function(x) {x.setSelected(false); });
    e.setSelected(true);
  }

}
