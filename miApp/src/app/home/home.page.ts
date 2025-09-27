import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor
import { Observable } from 'rxjs';
import { PacientesService } from '../core/servicios/pacientes';
import { Paciente } from '../core/models/ficha-medica';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonItem,
  IonAvatar,
  IonLabel,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonButton,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // Se añade la propiedad standalone
  imports: [
    CommonModule, // Se añade CommonModule para usar *ngFor y el pipe async
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonItem,
    IonAvatar,
    IonLabel,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonButton,
    IonButtons,
    IonMenuButton
  ],
})
export class HomePage implements OnInit {
  public pacientes$!: Observable<Paciente[]>;

  // Se unifican los dos constructores en uno solo
  constructor(private pacientesService: PacientesService) {}

  ngOnInit() {
    this.pacientes$ = this.pacientesService.getPacientes();
  }
}