/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, forwardRef, Parent, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';

import {Society} from '../app';
import {Departement} from 'class/departement';
import {Poste} from 'class/poste';
import {Employe} from 'class/employe';

import {CustomValidator} from 'validators/customValidator';
import {DatasService} from 'services/datasService';

@Component({
	selector: 'departement-item',
	properties: ['departement'],
	appInjector: [DatasService]
})
@View({
	templateUrl: 'templates/departement-item.html',
})
export class DepartementItem
{
	departement: Departement;

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
