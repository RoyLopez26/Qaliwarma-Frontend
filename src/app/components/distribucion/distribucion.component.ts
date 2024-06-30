import {Component, OnInit} from '@angular/core';
import {Distribucion} from "../../models/distribucion.model";
import {DistribucionService} from "../../services/distribucion.service";

enum Severity {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger'
}

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html',
  styleUrl: './distribucion.component.scss'
})
export class DistribucionComponent implements OnInit {

  distribuciones: Distribucion[] = [];
  distribucionSeleccionada: Distribucion | null = null;
  displayModal = false;

  constructor(private distribucionService: DistribucionService) {}

  ngOnInit() {
    this.distribucionService.listarDistribuciones().subscribe(data => {
      this.distribuciones = data;
    });
  }

  verDetalles(distribucion: Distribucion) {
    this.distribucionSeleccionada = distribucion;
    this.displayModal = true;
  }

  ocultarDetalles() {
    this.displayModal = false;
  }

  getSeverity(estadoEntrega: string): Severity | undefined {
    switch (estadoEntrega.toLowerCase()) {
      case 'Completado':
        return Severity.SUCCESS;
      case 'Pendiente':
        return Severity.WARNING;
      case 'En camino':
        return Severity.DANGER;
      default:
        return Severity.SUCCESS;
    }
  }
}
