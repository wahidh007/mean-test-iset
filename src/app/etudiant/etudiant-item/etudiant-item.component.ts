import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-item',
  templateUrl: './etudiant-item.component.html',
  styleUrls: ['./etudiant-item.component.css']
})
export class EtudiantItemComponent implements OnInit {
  @Input()
  etudiant!: Etudiant;

  constructor(private etutiantService: EtudiantService) { }

  ngOnInit(): void {
  }

  onDelete(e: Etudiant) {
    if (window.confirm('Etes-vous sur de supprimer cet etudiant ?')) {
      this.etutiantService.deleteEtudiant(e);
    }
  }

}
