import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css']
})
export class EtudiantAddComponent implements OnInit {

  constructor(private route: Router, private etudiantService: EtudiantService) { }

  ngOnInit(): void {
  }

  onSubmit(etudiantForm: NgForm) {
    let etudiant = new Etudiant( etudiantForm.value.nom,
                                  etudiantForm.value.nom,
                                  etudiantForm.value.email,
                                  etudiantForm.value.dateNais);

    this.etudiantService.addEtudiant(etudiant);
    alert('Etudiant ajouté avec succès !');
    this.route.navigateByUrl('/etudiantList');
  }

}
