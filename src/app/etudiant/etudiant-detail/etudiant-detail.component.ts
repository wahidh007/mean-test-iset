import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-detail',
  templateUrl: './etudiant-detail.component.html',
  styleUrls: ['./etudiant-detail.component.css']
})
export class EtudiantDetailComponent implements OnInit {
  etudiant: Etudiant | undefined;

  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.etudiant = this.etudiantService.etudiants.find((e) => e.id === id);
  }

}
