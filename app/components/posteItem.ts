/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent, forwardRef} from 'angular2/angular2';
import {DepartementItem} from 'components/departementItem';
import {EmployeItem} from 'components/employeItem';
import {Poste} from 'class/poste';

@Component({
  selector: 'poste-item',
  properties: ['poste']
})
@View({
  templateUrl: '',
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
