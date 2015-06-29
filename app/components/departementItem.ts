/// <reference path="../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, forwardRef} from 'angular2/angular2';
import {PosteItem} from 'components/posteItem';
import {Departement} from 'class/departement';

@Component({
  selector: 'departement-item',
  properties: ['departement']
})
@View({
  templateUrl: '',
  directives: [forwardRef(()=>PosteItem)]
})
export class DepartementItem
{
    departement: Departement;

    constructor() {
    }

}
