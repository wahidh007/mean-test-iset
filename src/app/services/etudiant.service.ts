import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  etudiants : Etudiant[] = [
    new Etudiant('Z45', 'Salah', 'salah.gmail.com', new Date('06/05/2002')),
    new Etudiant('S89', 'Amar', 'Amar.gmail.com', new Date('12/17/2001')),
    new Etudiant('F47', 'Fatma', 'fatma.gmail.com', new Date('09/23/1998')),
  ];

  // apiUrl = "http://localhost:3000/api/etudiant/";
  apiUrl = "/api/etudiant/";

  constructor(private http: HttpClient) { }

  getEtudiants() : Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiUrl);
  }

  getEtudiantById(id: string) : Observable<Etudiant> {
    // return this.etudiants.find((e) => e.id === id);
    return this.http.get<Etudiant>(this.apiUrl + id);
  }

  addEtudiant(e: Etudiant) : Observable<Etudiant[]> {
    // this.etudiants.push(e);
    return this.http.post<Etudiant[]>(this.apiUrl, e);
  }

  updateEtudiant(e: Etudiant) : Observable<any> {
    // let etudiant = this.etudiants.find((element) => element._id === e._id);

    // etudiant!.nom = e.nom;
    // etudiant!.email = e.email;
    // etudiant!.dateNais = e.dateNais;
    return this.http.put<any>(this.apiUrl + e._id, e);
  }

  deleteEtudiant(e: Etudiant) : Observable<any> {
    // let index = this.etudiants.indexOf(e);
    // this.etudiants.splice(index, 1);
    return this.http.delete<any>(this.apiUrl + e._id);
  }
}
