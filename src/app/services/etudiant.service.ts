import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  etudiants : Etudiant[] = [
    new Etudiant('Z45', 'Salah', 'salah.gmail.com', new Date()),
    new Etudiant('S89', 'Amar', 'Amar.gmail.com', new Date()),
    new Etudiant('F47', 'Fatma', 'fatma.gmail.com', new Date()),
  ];

  constructor() { }

  addEtudiant(e: Etudiant) {
    this.etudiants.push(e);
  }

  deleteEtudiant(e: Etudiant) {
    let index = this.etudiants.indexOf(e);
    this.etudiants.splice(index, 1);
  }
}
