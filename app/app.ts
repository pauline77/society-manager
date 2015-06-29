/// <reference path="../typings/tsd.d.ts" />

import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Component, View, bootstrap, NgFor, Parent, forwardRef} from 'angular2/angular2';

import {Employe} from 'class/employe';
import {Poste} from 'class/poste';
import {Departement} from 'class/departement';

import {DepartementItem, PosteItem, EmployeItem} from 'components/organisationItem';

import {StorageService} from 'services/storageService';
import {DatasService} from 'services/datasService';forwardRef

@Component({
  	selector: 'society',
  	appInjector: [DatasService]
})
@RouteConfig([
  { path: '/departement:{{}}', component: Departement, as: 'departement'},
  { path: '/poste', component: Poste, as: 'poste'},
  { path: '/employe', component: Employe, as:'employe'}
])
@View({
  templateUrl: 'templates/index.html',
  	directives: [NgFor, DepartementItem, PosteItem, forwardRef(()=> DepartementDetail)]
})
class Society {
	departements: Array<Departement>;
	datasService: DatasService;
	departementDetail: DepartementDetail;

	constructor(datasService: DatasService) {
		this.datasService = datasService;
		this.departements = this.datasService.getDatas();
		console.log(this.departements);
	}

	afficherPoste(poste) {
    	this.departementDetail;
  	}
  	
 	registerDepartementDetail(departementDetail: DepartementDetail){
 		this.departementDetail = departementDetail;
 	}
}

@Component({
  	selector: 'departement',
  	appInjector: [DatasService]
})
@View({
  templateUrl: 'templates/departement.html',
  	directives: [NgFor, PosteItem]
})
class DepartementDetail {
	society:Society;

 	constructor(@Parent() society: Society){
 		this.society = society;
 		this.society.registerDepartementDetail(this);
 	}

} 
bootstrap(Society, [routerInjectables]);
