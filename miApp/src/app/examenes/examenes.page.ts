import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PacienteHeaderComponent } from '../componentes/paciente-header/paciente-header.component';

interface Examen {
  nombre: string;
  fecha: Date;
}

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.page.html',
  styleUrls: ['./examenes.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, FormsModule, PacienteHeaderComponent]
})
export class ExamenesPage {
   patientName: string = 'Juan Peréz'; 
   mostrarFiltro: boolean = false;
   filtroSeleccionado: string = 'todos';

   examenes: Examen[] = [
    { nombre: 'Exámen 1', fecha: new Date('2023-10-11') },
    { nombre: 'Exámen 2', fecha: new Date('2024-09-03') },
    { nombre: 'Exámen 3', fecha: new Date('2025-04-21') },
    { nombre: 'Exámen 4', fecha: new Date('2022-05-15') },
    { nombre: 'Exámen 5', fecha: new Date('2024-12-10') }
  ];

   examenesFiltrados: Examen[] = [...this.examenes];

   toggleFiltro() {
    this.mostrarFiltro = !this.mostrarFiltro;
  }

  aplicarFiltro() {
    switch (this.filtroSeleccionado) {
      case 'recientes':
        this.examenesFiltrados = [...this.examenes].sort((a, b) => 
          new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
        );
        break;
      
      case 'antiguos':
        this.examenesFiltrados = [...this.examenes].sort((a, b) => 
          new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
        );
        break;
      
      case 'todos':
      default:
        this.examenesFiltrados = [...this.examenes];
        break;
    }
  }
    constructor(){}
}
