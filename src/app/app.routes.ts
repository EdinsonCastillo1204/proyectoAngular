import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';  // Importa HomeComponent correctamente
import { ContactComponent } from './pages/contact/contact.component';  // Importa ContactComponent correctamente
import { ServiciosComponent } from './pages/servicios/servicios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Usa 'component' en lugar de 'loadComponent'
  { path: 'contact', component: ContactComponent }, // Usa 'component' aquí también
  { path: 'services', component: ServiciosComponent }
]