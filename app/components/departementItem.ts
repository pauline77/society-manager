/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, forwardRef, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';
import {PosteItem} from 'components/posteItem';
import {Departement} from 'class/departement';
import {CustomValidator} from 'validators/customValidator';

@Component({
    selector: 'departement-item',
    properties: ['departement'],
    appInjector: [CustomValidator]
})
@View({
    directives: [formDirectives],
    template: `
        <form [ng-form-model]='departementForm'>
            <p>Département <input type='text' ng-control='departement'></p>
            <button (click)='addDepartement($event)'>Ajouter</button>
        </form>`
  // directives: [forwardRef(()=>PosteItem)]
})
export class DepartementItem
{
    departement: Departement;
    departementForm:ControlGroup;

    constructor(customValidator: CustomValidator) {
        this.departementForm = new ControlGroup({
            departement: new Control("", customValidator.departementExist)
        });
    }

    addDepartement(e) {
        e.preventDefault();
        if(this.departementForm.valid) { // return true or false, depending on the form state
            console.log('formulaire ok');
        } else {
            console.error("invalid form", this.departementForm);
        }
    }

}
