import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonItem, IonAvatar, IonLabel 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cabeza-perfil',
  templateUrl: './cabeza-perfil.component.html',
  styleUrls: ['./cabeza-perfil.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonItem, IonAvatar, IonLabel
  ]
})
export class CabezaPerfilComponent {
  @Input() nombre: string = '';
  @Input() t_sangre: string = '';
  @Input() n_emergencia: string = '';
  @Input() avatarUrl: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
}