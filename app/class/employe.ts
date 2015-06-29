export class Employe
{
    private nom: String;
    private prenom: String;
    private ddn: Date;
    private sexe: String;

    constructor(nom: String, prenom: String, ddn: Date, sexe: String) {
        this.nom = nom;
        this.prenom = prenom;
        this.ddn = ddn;
        this.sexe = sexe;
    }

    getNom() {
        return this.nom;
    }

    setNom(nom: String) {
        this.nom = nom;
        return this;
    }

    getPrenom() {
        return this.prenom;
    }

    setPrenom(prenom: String) {
        this.prenom = prenom;
        return this;
    }

    getDdn() {
        return this.ddn;
    }

    setDdn(ddn: Date) {
        this.ddn = ddn;
        return this;
    }

    getSexe() {
        return this.sexe;
    }

    setSexe(sexe: String) {
        this.sexe = sexe;
        return this;
    }
}
