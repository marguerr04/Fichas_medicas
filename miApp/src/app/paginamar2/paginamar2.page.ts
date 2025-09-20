import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PacienteHeaderComponent } from '../componentes/paciente-header/paciente-header.component';

@Component({
  selector: 'app-paginamar2',
  templateUrl: './paginamar2.page.html',
  styleUrls: ['./paginamar2.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, PacienteHeaderComponent]
})
export class Paginamar2Page {
   patientName: string = 'Juan Peréz'; // <-- La página puede tener sus propias variables
  constructor(){}

}
