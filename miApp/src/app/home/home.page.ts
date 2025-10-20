import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonGrid,
  IonRow, IonCol, IonCard, IonCardHeader, IonCardContent,
  IonItem, IonAvatar, IonLabel, IonCardTitle, IonCardSubtitle,
  IonButton, IonIcon, IonList, IonButtons, IonMenuButton, IonModal
} from '@ionic/angular/standalone';
import { CabezaPerfilComponent } from '../componentes/cabeza-perfil/cabeza-perfil.component';
import { BloqueContenidoComponent } from '@app/componentes/bloque-contenido/bloque-contenido.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonGrid,
    IonRow, IonCol, IonCard, IonCardHeader, IonCardContent,
    IonItem, IonAvatar, IonLabel, IonCardTitle, IonCardSubtitle, IonModal,
    IonButton, IonIcon, IonList, IonButtons, IonMenuButton, CabezaPerfilComponent, BloqueContenidoComponent
  ],
})
export class HomePage implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() { }

  @ViewChild(IonModal) modal!: IonModal;
  patientName = 'Juan Pérez | id: 123';
  patientBlood = 'AB-';
  patientNemergency = '+56 9 1234 5678';

  datosPaciente = [
    { label: 'Email', valor: 'juan.perez@example.com' },
    { label: 'Teléfono', valor: '+56 9 1234 5678' },
    { label: 'Institución médica', valor: 'Hospital Padre Hurtado' }
  ];

  botonesHome = [
  { texto: 'Consultas', ruta: '/paginamar2' },
  { texto: 'Exámenes', ruta: '/examenes' },
  { texto: 'Datos de emergencia', ruta: '/datos-emergencia', },
  { texto: 'Tratamiento', ruta: '/tratamiento' }
  ];

  modalAbierto = true;
  breakpointActual = 0.1;

  alternarModal() {
    if (this.breakpointActual === 0.1) {
      this.breakpointActual = 0.5; 
    } else {
      this.breakpointActual = 0.1; 
    }
  }
  cerrarModal() {
    this.modalAbierto = false;
  }

  async navegar(ruta: string) {
    if (this.modal) {
        await this.modal.dismiss(null, 'navigation');
      }
      this.router.navigateByUrl(ruta);
  }

  ionViewWillLeave() {
      if (this.modal) {
        this.modal.dismiss(null, 'leave-page');
      }
      this.modalAbierto = false;
  }
  ionViewDidEnter() {
    this.modalAbierto = true;
  }
}