import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantDashboardComponent } from './etudiant/etudiant-dashboard/etudiant-dashboard.component';
import { EtudiantAddComponent } from './etudiant/etudiant-add/etudiant-add.component';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { EtudiantDetailComponent } from './etudiant/etudiant-detail/etudiant-detail.component';
import { EtudiantItemComponent } from './etudiant/etudiant-item/etudiant-item.component';
import { LoginComponent } from './etudiant/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantDashboardComponent,
    EtudiantAddComponent,
    EtudiantListComponent,
    EtudiantDetailComponent,
    EtudiantItemComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
