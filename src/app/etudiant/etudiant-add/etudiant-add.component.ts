import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css']
})
export class EtudiantAddComponent implements OnInit {

  etudiant: Etudiant | undefined;
  id!: string | null;

  constructor(private routeParam: ActivatedRoute, private route: Router, private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.id = this.routeParam.snapshot.paramMap.get("id");

    if (this.id === "-1") {
      this.etudiant = new Etudiant("-1", "", "", new Date('01/01/2000'));
    } else {
      // this.etudiant = new Etudiant("-1", "", "", new Date('01/01/2000'));
      this.etudiant = this.etudiantService.etudiants.find((e) => e._id === this.id);
    }
  }

  onSubmit(etudiantForm: NgForm) {
    let etudiant = new Etudiant( this.etudiant!._id === "-1" ? etudiantForm.value.nom : this.etudiant!._id,
                                  etudiantForm.value.nom,
                                  etudiantForm.value.email,
                                  etudiantForm.value.dateNais);

    if (etudiantForm.invalid) {
      return;
    }

    if (this.id === "-1") {
      this.etudiantService.addEtudiant(etudiant)
        .subscribe((listEtud) => {
          alert('Etudiant ajouté avec succès !');
          this.route.navigateByUrl('/etudiantList');
        });
    } else {
      this.etudiantService.updateEtudiant(etudiant)
        .subscribe(() => {
          alert('Etudiant mis à jour avec succès !');
          this.route.navigateByUrl('/etudiantList');
        })
    }

  }

}
