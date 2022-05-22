import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  etudiants! : Etudiant[];
  isLoading = false;

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    // this.etudiants = this.etudiantService.etudiants;
    this.isLoading = true;
    this.etudiantService.getEtudiants().subscribe((listEtudiants) => {
      this.etudiants = listEtudiants;
      this.etudiantService.etudiants = listEtudiants;
      this.isLoading = false;
    });
  }

}
