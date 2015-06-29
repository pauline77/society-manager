/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent, forwardRef} from 'angular2/angular2';
import {Departement} from 'components/departement';
import {Employe} from 'components/employe';

@Component({
  selector: 'poste'
})
@View({
  templateUrl: '',
  directives: [forwardRef(()=>Employe)]
})
export class Poste
{
    private libelle: String;
    private employes: Array<Employe>;
    private departement: Departement;

    constructor(@Parent() departement: Departement, libelle: String) {
        this.departement = departement;
        this.libelle = libelle;
    }

    getLibelle() {
        return this.libelle;
    }

    getDepartement() {
        return this.departement;
    }

    getEmployes() {
        return this.employes;
    }

    addEmploye(nom: String, prenom: String, ddn: Date, sexe: String) {
        this.employes.push(new Employe(this, nom, prenom, ddn, sexe));
    }
}
