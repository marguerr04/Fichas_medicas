import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonButton, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-paciente',
  templateUrl: './login-paciente.page.html',
  styleUrls: ['./login-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, RouterModule, CommonModule, FormsModule]
})
export class LoginPacientePage implements OnInit {
  rut: string = '';
  correo: string = '';
  clave: string = '';

  validarFormulario(): boolean {
    const rutValido = this.rut.length >= 8;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correo);
    const claveValida = this.clave.length >= 8;
    return rutValido && emailValido && claveValida;
  }

  validarEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correo);
  }

  enviar() {
    if (this.validarFormulario()) {
      console.log('Formulario válido');
      console.log('RUT:', this.rut);
      console.log('Correo:', this.correo);
      console.log('Clave:', this.clave);
    } else {
      console.log('Formulario inválido');}
  }
  constructor() { }

  ngOnInit() {
  }
}