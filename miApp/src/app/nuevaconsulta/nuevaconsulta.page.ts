import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonIcon, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-nuevaconsulta',
  templateUrl: './nuevaconsulta.page.html',
  styleUrls: ['./nuevaconsulta.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButton, IonInput, IonIcon, IonItem
  ]
})
export class NuevaconsultaPage {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
  
  fechaConsulta: string = '';
  centroMedico: string = '';

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log("Archivo seleccionado:", file.name, file.type, file.size);
    }
  }

  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  guardar() {
    console.log("Fecha:", this.fechaConsulta);
    console.log("Centro Médico:", this.centroMedico);
  }
}