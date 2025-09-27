import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Paciente } from '../models/ficha-medica'; // Importamos el "molde" del paciente

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private firestore: Firestore = inject(Firestore);
  // Apuntamos a la colección "pacientes" en Firestore. Si no existe, se creará.
  private pacientesCollection = collection(this.firestore, 'pacientes');

  constructor() { }

  // Función para obtener todos los pacientes en tiempo real
  getPacientes(): Observable<Paciente[]> {
    // collectionData nos devuelve un Observable que se actualiza automáticamente
    return collectionData(this.pacientesCollection, { idField: 'id' }) as Observable<Paciente[]>;
  }

  // Aquí podrías añadir más funciones en el futuro (addPaciente, deletePaciente, etc.)
}