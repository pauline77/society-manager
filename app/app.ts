/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent} from 'angular2/angular2';
import {Departement} from 'components/departement';
import {Poste} from 'components/poste';
import {Employe} from 'components/employe';
import {StorageService} from 'services/storageService';

@Component({
  selector: 'society'
})
@View({
  template: '<h1>Coucou</h1><departement></departement>',
  directives: [Employe]
})
class Society {

}

bootstrap(Society);
