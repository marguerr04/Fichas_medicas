import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PacienteHeaderComponent } from '../componentes/paciente-header/paciente-header.component';
import { ConsultaListComponent } from '../componentes/consulta-list/consulta-list.component';

@Component({
  selector: 'app-paginamar2',
  templateUrl: './paginamar2.page.html',
  styleUrls: ['./paginamar2.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, PacienteHeaderComponent, ConsultaListComponent]
})
export class Paginamar2Page {
  patientName: string = 'Juan Pérez';
  consultas = [
    { nombre: 'Consulta 1', fecha: '01/12/2024' },
    { nombre: 'Consulta 2', fecha: '02/11/2024' },
    { nombre: 'Consulta 3', fecha: '03/10/2024' },
    { nombre: 'Consulta 4', fecha: '04/09/2024' }
  ];
}
