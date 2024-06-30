import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Distribucion} from "../models/distribucion.model";

@Injectable({
  providedIn: 'root'
})
export class DistribucionService {
  private apiUrl = 'https://ms-qaliwarma.azurewebsites.net/distribucion';

  constructor(private http: HttpClient) { }

  obtenerDistribucion(id: number): Observable<Distribucion[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Distribucion[]>(url);
  }

  listarDistribuciones(): Observable<Distribucion[]> {
    return this.http.get<Distribucion[]>(this.apiUrl);
  }
}
