import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Distribucion} from "../../models/distribucion.model";

@Component({
  selector: 'app-detalle-distribucion',
  templateUrl: './detalle-distribucion.component.html',
  styleUrl: './detalle-distribucion.component.scss'
})
export class DetalleDistribucionComponent {
  @Input() distribucionSeleccionada: Distribucion | null = null;
  @Output() cerrarDetalles = new EventEmitter<void>();
}
