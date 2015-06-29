import {Employe} from 'class/employe';

export class Poste
{
    private libelle: String;
    private employes: Array<Employe>;

    constructor(libelle: String) {
        this.libelle = libelle;
        this.employes = [];
    }

    getLibelle() {
        return this.libelle;
    }

    setLibelle(libelle: String) {
        this.libelle = libelle;
        return this;
    }

    getEmployes() {
        return this.employes;
    }

    addEmploye(nom: String, prenom: String, ddn: Date, sexe: String) {
        this.employes.push(new Employe(nom, prenom, ddn, sexe));
    }
}
