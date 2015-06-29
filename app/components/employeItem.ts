/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';
import {PosteItem} from 'components/posteItem';
import {Employe} from 'class/employe';

@Component({
  selector: 'employe-item',
  properties: ['employe']
})
@View({
    template: ``
    //directives: [formDirectives],
    // template: `
    //     <form [ng-form-model]='employeForm' [class.invalid]='!employeForm.valid'>
    //         <p>Nom <input type='text' ng-control='nom'></p>
    //         <p>Prénom <input type='text' ng-control='prenom'></p>
    //         <p>Date de naissance <input type='text' ng-control='ddn'></p>
    //         <p>Sexe <select><option>Homme</option><option>Femme</option></select></p>
    //         <button (click)='addEmploye($event)'>Ajouter</button>
    //     </form>`
})
export class EmployeItem
{
    employe: Employe;
    private poste: PosteItem;
    private employeForm:ControlGroup;

    constructor(@Parent() poste: PosteItem) {
        // this.employeForm = new ControlGroup({
        //     nom: new Control("", Validators.required), // pre-existing validator
        //     prenom: new Control("", Validators.required),
        //     ddn: new Control("", Validators.required)
        // });
        this.poste = poste;
    }

    getPoste() {
        return this.poste;
    }

    // addEmploye(e) {
    //     e.preventDefault();
    //     if(this.employeForm.valid) { // return true or false, depending on the form state
    //         // this.poste.addEmploye(this.nom,this.prenom,this.ddn,this.sexe);
    //     } else {
    //         console.error("invalid form", this.employeForm);
    //     }
    // }
}