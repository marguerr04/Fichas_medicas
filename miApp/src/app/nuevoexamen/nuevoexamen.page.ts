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
  fotoTomada: string | null = null; // Para almacenar la foto

  constructor(
    private cameraService: CameraService, // Inyecta el servicio
    private alertController: AlertController,
    private router: Router
  ) {}

  // Método para tomar foto con la cámara
  async tomarFoto() {
    try {
      // Verificar permisos primero
      const permisos = await this.cameraService.solicitarPermisosCamara();
      
      if (!permisos) {
        await this.mostrarMensaje('Error', 'Se necesitan permisos de cámara para tomar fotos');
        return;
      }

      // Tomar la foto
      const fotoDataUrl = await this.cameraService.tomarFoto();
      this.fotoTomada = fotoDataUrl;
      
      // Opcional: guardar localmente
      await this.cameraService.guardarFotoLocalmente(fotoDataUrl, 'ultima-foto-examen');
      
      await this.mostrarMensaje('Éxito', 'Foto tomada correctamente');
      
    } catch (error: any) {
      console.error('Error al tomar foto:', error);
      await this.mostrarMensaje('Error', error.message || 'No se pudo tomar la foto');
    }
  }

  // Método para seleccionar de galería
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
      // Aquí puedes procesar el archivo seleccionado
    }
  }

  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  async guardar() {
    // Validaciones
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

    // Aquí puedes enviar los datos al backend
    // Por ejemplo: convertir la foto a Blob para enviar
    if (this.fotoTomada) {
      const fotoBlob = this.cameraService.dataUrlToBlob(this.fotoTomada);
      console.log("Foto en formato Blob:", fotoBlob);
    }

    await this.mostrarMensaje('Éxito', 'Examen guardado correctamente');
    
    // Opcional: navegar a otra página después de guardar
    // this.router.navigate(['/examenes']);
  }

  // Método auxiliar para mostrar mensajes
  private async mostrarMensaje(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Método para eliminar la foto tomada
  eliminarFoto() {
    this.fotoTomada = null;
  }
}