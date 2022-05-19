export class Etudiant {
    id: string;
    nom: string;
    email: string;
    dateNais: Date;

    constructor(id: string, nom: string, email: string, dateNais: Date,) {
      this.id = id;
      this.nom = nom;
      this.email = email;
      this.dateNais = dateNais
    }
}
