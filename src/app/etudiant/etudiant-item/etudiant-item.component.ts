import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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

  constructor(private etutiantService: EtudiantService, private router: Router) { }

  ngOnInit(): void {
  }

  onDelete(e: Etudiant) {
    if (window.confirm('Etes-vous sur de supprimer cet etudiant ?')) {
      this.etutiantService.deleteEtudiant(e)
        .subscribe(() => {
          alert('Etudiant supprimé avec succès !');
          // this.router.navigateByUrl('/etudiantList');

          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
              this.router.navigate([this.router.url]);
          });
        });
    }
  }

}
