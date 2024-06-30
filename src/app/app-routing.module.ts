import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DistribucionComponent} from "./components/distribucion/distribucion.component";

const routes: Routes = [
  { path: '', component: DistribucionComponent },
  { path: 'distribuciones', component: DistribucionComponent },
  { path: '**', redirectTo: 'distribuciones' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
