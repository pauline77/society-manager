/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';

import {Employe} from 'class/employe';
import {Poste} from 'class/poste';
import {Departement} from 'class/departement';

import {DepartementItem, PosteItem, EmployeItem} from 'components/organisationItem';

import {StorageService} from 'services/storageService';
import {DatasService} from 'services/datasService';
import {CustomValidator} from 'validators/customValidator';

@Component({
    selector: 'society',
    appInjector: [CustomValidator, DatasService]
})
@View({
    templateUrl: 'templates/index.html',
    directives: [NgFor, DepartementItem, PosteItem, formDirectives]
})
class Society {
	departements: Array<Departement>;
	datasService: DatasService;
    departementForm:ControlGroup;

	constructor(customValidator: CustomValidator, datasService: DatasService) {
		this.datasService = datasService;
		this.departements = this.datasService.getDatas();

        this.departementForm = new ControlGroup({
            departement: new Control("", customValidator.departementExist)
        });
	}

    addDepartement(e) {
        e.preventDefault();
        if(this.departementForm.valid) { // return true or false, depending on the form state
            this.datasService.addDepartement(this.departementForm.value.departement);
        } else {
            console.error("invalid form", this.departementForm);
        }
    }

    deleteDepartement(position: number) {
        this.datasService.deleteDepartement(position);
    }

    updateDepartement(position: number) {

    }
}

bootstrap(Society);
