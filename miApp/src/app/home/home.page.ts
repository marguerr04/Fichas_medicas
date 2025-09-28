import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonGrid,
  IonRow, IonCol, IonCard, IonCardHeader, IonCardContent,
  IonItem, IonAvatar, IonLabel, IonCardTitle, IonCardSubtitle,
  IonButton, IonIcon, IonList, IonButtons, IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonGrid,
    IonRow, IonCol, IonCard, IonCardHeader, IonCardContent,
    IonItem, IonAvatar, IonLabel, IonCardTitle, IonCardSubtitle,
    IonButton, IonIcon, IonList, IonButtons, IonMenuButton
  ],
})
export class HomePage implements OnInit {
  constructor() { }
  ngOnInit() { }
}