/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent} from 'angular2/angular2';

import {Employe} from 'class/employe';
import {Poste} from 'class/poste';
import {Departement} from 'class/departement';

import {DepartementItem} from 'components/departementItem';
import {PosteItem} from 'components/posteItem';
import {EmployeItem} from 'components/employeItem';

import {StorageService} from 'services/storageService';

@Component({
    selector: 'society'
})
@View({
    template: '<h1>Coucou</h1><departement-item></departement-item>',
    directives: [DepartementItem]
})
class Society {
}

bootstrap(Society);
