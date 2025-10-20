import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButton, IonInput, IonIcon, IonItem,
  AlertController 
} from '@ionic/angular/standalone';
import { CameraService } from '../services/camera';

@Component({
  selector: 'app-nuevoexamen',
  templateUrl: './nuevoexamen.page.html',
  styleUrls: ['./nuevoexamen.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButton, IonInput, IonIcon, IonItem
  ]
})
export class NuevoexamenPage {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
  
  fechaExamen: string = '';
  centroMedico: string = '';
  fotoTomada: string | null = null;

  constructor(
    private cameraService: CameraService,
    private alertController: AlertController,
    private router: Router
  ) {}

  async tomarFoto() {
    try {
      const permisos = await this.cameraService.solicitarPermisosCamara();
      
      if (!permisos) {
        await this.mostrarMensaje('Error', 'Se necesitan permisos de cámara para tomar fotos');
        return;
      }

      const fotoDataUrl = await this.cameraService.tomarFoto();
      this.fotoTomada = fotoDataUrl;
      await this.cameraService.guardarFotoLocalmente(fotoDataUrl, 'ultima-foto-examen');
      await this.mostrarMensaje('Éxito', 'Foto tomada correctamente');
    } catch (error: any) {
      console.error('Error al tomar foto:', error);
      await this.mostrarMensaje('Error', error.message || 'No se pudo tomar la foto');
    }
  }

  async seleccionarDeGaleria() {
    try {
      const fotoDataUrl = await this.cameraService.seleccionarDeGaleria();
      this.fotoTomada = fotoDataUrl;
      await this.mostrarMensaje('Éxito', 'Foto seleccionada correctamente');
    } catch (error: any) {
      console.error('Error al seleccionar foto:', error);
      await this.mostrarMensaje('Error', error.message || 'No se pudo seleccionar la foto');
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log("Archivo seleccionado:", file.name, file.type, file.size);
    }
  }

  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  async guardar() {
    if (!this.fechaExamen) {
      await this.mostrarMensaje('Error', 'Por favor selecciona una fecha');
      return;
    }

    if (!this.fotoTomada) {
      await this.mostrarMensaje('Error', 'Por favor toma o selecciona una foto');
      return;
    }

    console.log("Fecha:", this.fechaExamen);
    console.log("Centro Médico:", this.centroMedico);
    console.log("Foto:", this.fotoTomada ? 'Sí' : 'No');

    if (this.fotoTomada) {
      const fotoBlob = this.cameraService.dataUrlToBlob(this.fotoTomada);
      console.log("Foto en formato Blob:", fotoBlob);
    }

    await this.mostrarMensaje('Éxito', 'Examen guardado correctamente');
  }

  private async mostrarMensaje(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
        buttons: ['OK']
    });
    await alert.present();
  }

  eliminarFoto() {
    this.fotoTomada = null;
  }
}