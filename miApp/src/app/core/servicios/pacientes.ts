import { Injectable, inject } from '@angular/core';
import { 
  Firestore, 
  collection, 
  collectionData, 
  addDoc, 
  doc, 
  deleteDoc, 
  updateDoc,
  query,
  orderBy,
  Timestamp 
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Paciente } from '../models/ficha-medica';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private firestore: Firestore = inject(Firestore);
  private pacientesCollection = collection(this.firestore, 'pacientes');

  constructor() { }

  // READ - Obtener todos los pacientes ordenados por fecha de creación
  getPacientes(): Observable<Paciente[]> {
    const q = query(this.pacientesCollection, orderBy('fechaNac', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Paciente[]>;
  }

  // CREATE - Añadir un nuevo paciente
  addPaciente(paciente: Paciente) {
    // Removemos el id si existe para que Firestore genere uno nuevo
    const { id, ...pacienteData } = paciente;
    return addDoc(this.pacientesCollection, pacienteData);
  }

  // UPDATE - Actualizar un paciente existente
  updatePaciente(id: string, paciente: Partial<Paciente>) {
    const pacienteDoc = doc(this.firestore, `pacientes/${id}`);
    return updateDoc(pacienteDoc, paciente);
  }

  // DELETE - Eliminar un paciente
  deletePaciente(id: string) {
    const pacienteDoc = doc(this.firestore, `pacientes/${id}`);
    return deleteDoc(pacienteDoc);
  }
}