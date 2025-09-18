import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // 1. IMPORTA Router y RouterLink

// 2. IMPORTA TODOS los componentes de Ionic que usas en el HTML
import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet, // Es importante para que las páginas se muestren
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true, // Tu componente principal también es standalone
  // 3. AÑADE todos los componentes al array de 'imports'
  imports: [
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    RouterLink, // Necesario para que [routerLink] funcione
  ],
})
export class AppComponent {
  constructor(private router: Router) {}

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigateByUrl('/login-paciente');
  }
}