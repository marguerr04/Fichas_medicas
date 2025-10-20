import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PacienteHeaderComponent } from '../componentes/paciente-header/paciente-header.component';
import { CabezaPerfilComponent } from '../componentes/cabeza-perfil/cabeza-perfil.component';
import { ListaArchivosComponent } from '@app/componentes/lista-archivos/lista-archivos.component';

interface Examen {
  nombre: string;
  fecha: Date;
}

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.page.html',
  styleUrls: ['./examenes.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, FormsModule, PacienteHeaderComponent, CabezaPerfilComponent,
    ListaArchivosComponent]
})
export class ExamenesPage {
   patientName = 'Juan Pérez | id: 123';
   patientBlood = 'AB-';
   patientNemergency = '+56 9 1234 5678'; 

   examenes = [
    { nombre: 'Exámen 1', fecha: '2023/10/11' },
    { nombre: 'Exámen 2', fecha: '2024/09/03' },
    { nombre: 'Exámen 3', fecha: '2025/04/21' },
    { nombre: 'Exámen 4', fecha: '2022/05/15' },
    { nombre: 'Exámen 5', fecha: '2024/12/10' }
  ];

  botonesA = [
  { texto: 'Añadir examen', ruta: '/nuevoexamen' },
  { texto: 'Home', ruta: '/home', },
  ];

  warning = "Último examen: Hace 6 meses";
    constructor(){}
}
