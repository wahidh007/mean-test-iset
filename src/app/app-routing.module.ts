import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantAddComponent } from './etudiant/etudiant-add/etudiant-add.component';
import { EtudiantDetailComponent } from './etudiant/etudiant-detail/etudiant-detail.component';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { LoginComponent } from './etudiant/login/login.component';

const routes: Routes = [
  {path: '', component: EtudiantListComponent, pathMatch: 'full'},
  {path: 'etudiantList', component: EtudiantListComponent},
  {path: 'etudiantAdd/:id', component: EtudiantAddComponent},
  {path: 'etudiantDetail/:id', component: EtudiantDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/etudiantList'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
