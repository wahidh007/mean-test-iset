export class Etudiant {
    _id: string;
    nom: string;
    email: string;
    dateNais: Date;

    constructor(id: string, nom: string, email: string, dateNais: Date,) {
      this._id = id;
      this.nom = nom;
      this.email = email;
      this.dateNais = dateNais
    }
}
