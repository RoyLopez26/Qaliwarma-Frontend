export interface Distribucion {
  distribucionId: number;
  fechaDistribucion: Date;
  nombreEmpleado: string;
  nombreColegio: string;
  observaciones: string;
  estadoEntrega: string;
  detalles: {
    nombreProducto: string;
    cantidad: string;
    unidadMedida: string;
  }[];
}
