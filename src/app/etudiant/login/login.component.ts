import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  etudiants : Etudiant[] = [
    new Etudiant('Z45', 'Salah', 'salah.gmail.com', new Date('06/05/2002')),
    new Etudiant('S89', 'Amar', 'Amar.gmail.com', new Date('12/17/2001')),
    new Etudiant('F47', 'Fatma', 'fatma.gmail.com', new Date('09/23/1998')),
  ];

  nom = "Salah";

  constructor() { }

  ngOnInit(): void { }

}
