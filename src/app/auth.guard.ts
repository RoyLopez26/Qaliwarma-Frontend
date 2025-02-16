
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const usuario = localStorage.getItem('nombreUsuario');
    if (usuario) {
      return true; // Usuario autenticado, permitir acceso
    } else {
      this.router.navigate(['/']); // Redirigir al login
      return false; // No permitir acceso
    }
  }
}
