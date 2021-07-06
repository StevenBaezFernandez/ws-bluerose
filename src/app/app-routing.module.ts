import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
