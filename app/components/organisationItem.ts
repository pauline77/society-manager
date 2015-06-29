/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, forwardRef, Parent, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';

// import {PosteItem} from 'components/posteItem';
// import {EmployeItem} from 'components/employeItem';

import {Departement} from 'class/departement';
import {Poste} from 'class/poste';
import {Employe} from 'class/employe';

import {CustomValidator} from 'validators/customValidator';
import {DatasService} from 'services/datasService';


@Component({
	selector: 'departement-item',
	properties: ['departement'],
	appInjector: [CustomValidator, DatasService]
})
@View({
	templateUrl: 'templates/departement-item.html',
	directives: [formDirectives]
    // template: `
    //     <form [ng-form-model]='departementForm'>
    //         <p>Département <input type='text' ng-control='departement'></p>
    //         <button (click)='addDepartement($event)'>Ajouter</button>
    //     </form>`
})
export class DepartementItem
{
	departement: Departement;
    departementForm:ControlGroup;
	dataS: DatasService;

    constructor() {
    }

}


@Component({
	selector: 'poste-item',
	properties: ['poste']
})
@View({
	template: `<h1>POSTE</h1>`,
	directives: [forwardRef(()=>EmployeItem)]
})
export class PosteItem
{
    poste: Poste;
    private departement: DepartementItem;

    constructor(@Parent() departement: DepartementItem) {
        this.departement = departement;
    }

    getDepartement() {
        return this.departement;
    }
}


@Component({
	selector: 'employe-item',
	properties: ['employe']
})
@View({
	templateUrl: ''
})
export class EmployeItem
{
    employe: Employe;
    private poste: PosteItem;

    constructor(@Parent() poste: PosteItem) {
        this.poste = poste;
    }

    getPoste() {
        return this.poste;
    }
}
