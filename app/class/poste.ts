import {Employe} from 'class/employe';

export class Poste
{
    libelle: String;
    employes: Array<Employe>;

    constructor(libelle: String, employes: Array<Employe> = []) {
        this.libelle = libelle;
        this.employes = employes;
    }

    addEmploye(nom: String, prenom: String) {
        this.employes.push(new Employe(nom, prenom));
    }
}
