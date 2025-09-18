// Archivo: src/app/componentes/paciente-header/paciente-header.component.ts

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. IMPORTA todas las piezas de Ionic que usa el HTML de este componente
import {
  IonCard,
  IonItem,
  IonAvatar,
  IonIcon,
  IonLabel,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-paciente-header',
  templateUrl: './paciente-header.component.html',
  styleUrls: ['./paciente-header.component.scss'],
  standalone: true,
  // 2. AÑADE esas piezas a la lista de 'imports'
  imports: [
    CommonModule,
    IonCard,
    IonItem,
    IonAvatar,
    IonIcon,
    IonLabel,
    IonCardTitle,
    IonCardSubtitle,
  ],
})
export class PacienteHeaderComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';

  constructor() {}
}