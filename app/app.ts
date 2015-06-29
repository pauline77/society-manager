/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent} from 'angular2/angular2';

import {Employe} from 'class/employe';
import {Poste} from 'class/poste';
import {Departement} from 'class/departement';

import {DepartementItem, PosteItem, EmployeItem} from 'components/organisationItem';

import {StorageService} from 'services/storageService';
import {DatasService} from 'services/datasService';

@Component({
  selector: 'society',
  	appInjector: [DatasService]
})
@View({
  templateUrl: 'templates/index.html',
  	directives: [NgFor, DepartementItem, PosteItem, EmployeItem]
})
class Society {
	departements: Array<Departement>;
	datasService: DatasService;

	constructor(datasService: DatasService) {
		this.datasService = datasService;
		this.departements = this.datasService.getDatas();
		console.log(this.departements);
	}
}

bootstrap(Society);
