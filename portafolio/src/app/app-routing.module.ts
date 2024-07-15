import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaInicioComponent } from './portada-inicio/portada-inicio.component';

const routes: Routes = [
  { path:'', redirectTo:'/inicio', pathMatch:'full'},
  { path:'inicio', component:PortadaInicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
