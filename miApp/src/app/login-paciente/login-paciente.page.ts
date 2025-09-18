import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-paciente',
  templateUrl: './login-paciente.page.html',
  styleUrls: ['./login-paciente.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, RouterModule, CommonModule, FormsModule]
})
export class LoginPacientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
