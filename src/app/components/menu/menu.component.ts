import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;
  itemsCerrarSesion: MenuItem[] | undefined;

  public usuarioIngreso: string = localStorage.getItem('nombreUsuario') ?? '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Distribuciones',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/distribuciones'],
      }
    ];
  }
}
