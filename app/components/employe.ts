/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent} from 'angular2/angular2';
import {Poste} from 'components/poste';

@Component({
  selector: 'departement'
})
@View({
  templateUrl: ''
})
export class Employe
{
    private nom: String;
    private prenom: String;
    private ddn: Date;
    private sexe: String;
    private poste: Poste;

    constructor(@Parent() poste: Poste, nom: String, prenom: String, ddn: Date, sexe: String) {
        this.poste = poste;
        this.nom = nom;
        this.prenom = prenom;
        this.ddn = ddn;
        this.sexe = sexe;
    }

    getNom() {
        return this.nom;
    }

    getPrenom() {
        return this.prenom;
    }

    getDdn() {
        return this.ddn;
    }

    getSexe() {
        return this.sexe;
    }

    getPoste() {
        return this.poste;
    }
}
