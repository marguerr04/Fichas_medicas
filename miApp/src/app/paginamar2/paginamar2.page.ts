import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PacienteHeaderComponent } from '../componentes/paciente-header/paciente-header.component';
import { ListaArchivosComponent } from '../componentes/lista-archivos/lista-archivos.component';
import { CabezaPerfilComponent } from '../componentes/cabeza-perfil/cabeza-perfil.component';

@Component({
  selector: 'app-paginamar2',
  templateUrl: './paginamar2.page.html',
  styleUrls: ['./paginamar2.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, PacienteHeaderComponent, ListaArchivosComponent, CabezaPerfilComponent]
})
export class Paginamar2Page {
  patientName = 'Juan Pérez | id: 123';
  patientBlood = 'AB-';
  patientNemergency = '+56 9 1234 5678';

  consultas = [
    { nombre: 'Consulta 1', fecha: '01/12/2024' },
    { nombre: 'Consulta 2', fecha: '02/11/2024' },
    { nombre: 'Consulta 3', fecha: '03/10/2024' },
    { nombre: 'Consulta 4', fecha: '04/09/2024' }
  ];

  botonesA = [
  { texto: 'Añadir consulta', ruta: '/nuevaconsulta' },
  { texto: 'Gestionar consultas', ruta: '/gestion-consultas' },
  { texto: 'Home', ruta: '/home', },
  ];

  warning = "Última consulta: Hace 20 días";
}
