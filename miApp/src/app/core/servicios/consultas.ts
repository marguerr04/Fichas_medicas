import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Consulta } from '../models/ficha-medica';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  private firestore: Firestore = inject(Firestore);
  private consultasCollection = collection(this.firestore, 'consultas');

  constructor() { }

  getConsultas(): Observable<Consulta[]> {
    return collectionData(this.consultasCollection, { idField: 'id' }) as Observable<Consulta[]>;
  }

  addConsulta(consulta: Consulta) {
    return addDoc(this.consultasCollection, consulta);
  }

  deleteConsulta(id: string) {
    const consultaDoc = doc(this.firestore, `consultas/${id}`);
    return deleteDoc(consultaDoc);
  }
}