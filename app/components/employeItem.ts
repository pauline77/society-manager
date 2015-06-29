/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent} from 'angular2/angular2';
import {PosteItem} from 'components/posteItem';
import {Employe} from 'class/employe';

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
