import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  servicios = [
    'Consultoría empresarial',
    'Desarrollo de software',
    'Soporte técnico',
    'Marketing digital',
    'Diseño gráfico',
  ];

  serviciosFiltrados = [...this.servicios]; // Copia inicial de todos los servicios

  buscarServicio(event: Event): void {
    const input = event.target as HTMLInputElement; // Aseguramos el tipo
    const filtro = input.value.toLowerCase(); // Obtenemos el valor
    this.serviciosFiltrados = this.servicios.filter((servicio) =>
      servicio.toLowerCase().includes(filtro)
    );
  }
}