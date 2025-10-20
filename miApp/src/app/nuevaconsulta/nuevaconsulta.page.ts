import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButton, IonInput, IonIcon, IonItem,
  AlertController 
} from '@ionic/angular/standalone';
import { CameraService } from '../services/camera';

@Component({
  selector: 'app-nuevaconsulta',
  templateUrl: './nuevaconsulta.page.html',
  styleUrls: ['./nuevaconsulta.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, RouterModule,
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButton, IonInput, IonIcon, IonItem
  ]
})
export class NuevaconsultaPage {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
  
  motivoConsulta: string = '';
  fechaConsulta: string = '';
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
      await this.cameraService.guardarFotoLocalmente(fotoDataUrl, 'ultima-foto-consulta');
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
    // Validaciones para consulta
    if (!this.motivoConsulta.trim()) {
      await this.mostrarMensaje('Error', 'Por favor ingresa el motivo de la consulta');
      return;
    }

    if (!this.fechaConsulta) {
      await this.mostrarMensaje('Error', 'Por favor selecciona una fecha');
      return;
    }

    console.log("Motivo de consulta:", this.motivoConsulta);
    console.log("Fecha:", this.fechaConsulta);
    console.log("Centro Médico:", this.centroMedico);
    console.log("Foto:", this.fotoTomada ? 'Sí' : 'No');

    // Aquí puedes enviar los datos al backend
    await this.mostrarMensaje('Éxito', 'Consulta guardada correctamente');
    
    // Opcional: navegar a otra página
    // this.router.navigate(['/paginamar2']);
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