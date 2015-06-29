import {Poste} from 'class/poste';

export class Departement
{
    private libelle: String;
    private postes: Array<Poste>;

    constructor(libelle: String) {
        this.libelle = libelle;
        this.postes = [];
    }

    getLibelle() {
        return this.libelle;
    }

    setLibelle(libelle: String) {
        this.libelle = libelle;
        return this;
    }

    getPostes() {
        return this.postes;
    }

    addPoste(libelle: String) {
        this.postes.push(new Poste(libelle));
        return this;
    }
}
