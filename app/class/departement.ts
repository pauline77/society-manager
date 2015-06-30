import {Poste} from 'class/poste';

export class Departement
{
    libelle: String;
    postes: Array<Poste>;

    constructor(libelle: String, postes: Array<Poste> = []) {
        this.libelle = libelle;
        this.postes = postes;
    }

    addPoste(libelle: String) {
        this.postes.push(new Poste(libelle));
        return this;
    }
}
