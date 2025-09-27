import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PacienteHeaderComponent } from '../componentes/paciente-header/paciente-header.component';

@Component({
  selector: 'app-nuevoexamen',
  templateUrl: './nuevoexamen.page.html',
  styleUrls: ['./nuevoexamen.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, PacienteHeaderComponent]
})
export class NuevoexamenPage {
   titulo: string = 'Nuevo exámen'; // <-- La página puede tener sus propias variables
  constructor(){}

}
