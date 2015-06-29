/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, forwardRef} from 'angular2/angular2';
import {Poste} from 'components/poste';

@Component({
  selector: 'departement'
})
@View({
  templateUrl: '',
  directives: [forwardRef(()=>Poste)]
})
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

    getPostes() {
        return this.postes;
    }

    addPoste(libelle: String) {
        this.postes.push(new Poste(this, libelle));
    }
}
