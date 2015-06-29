/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent, forwardRef, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';

import {Employe} from 'class/employe';
import {Poste} from 'class/poste';
import {Departement} from 'class/departement';

import {StorageService} from 'services/storageService';
import {DatasService} from 'services/datasService';
import {CustomValidator} from 'validators/customValidator';

@Component({
    selector: 'society',
    appInjector: [CustomValidator, DatasService]
})
@View({
    templateUrl: 'templates/index.html',
    directives: [
        NgFor,
        forwardRef(()=> DepartementItem),
        forwardRef(()=> PosteItem),
        forwardRef(()=> DepartementDetail),
        formDirectives
    ]
})
export class Society {
	departements: Array<Departement>;
	datasService: DatasService;
    departementDetail: DepartementDetail;
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
            this.departementForm.departement = "";
        } else {
            console.error("invalid form", this.departementForm);
        }
    }

    deleteDepartement(position: number) {
        this.datasService.deleteDepartement(position);
    }

    updateDepartement(position: number) {

    }

    updateDepartementDetail(postes) {
        this.departementDetail.updatePostes(postes);
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
    directives: [NgFor, forwardRef(()=> PosteItem)]
})
class DepartementDetail {
    society:Society;
    postes: Array<Poste>;

    constructor(@Parent() society: Society){
        this.society = society;
        this.society.registerDepartementDetail(this);
    }

    updatePostes(postes) {
        this.postes = postes;
        console.log(this.postes);
    }
} 

@Component({
    selector: 'departement-item',
    properties: ['departement']
})
@View({
    templateUrl: 'templates/departement-item.html',
    directives: [forwardRef(()=>PosteItem)]
})
export class DepartementItem
{
    departement: Departement;
    society: Society;

    constructor(@Parent() society: Society) {
        this.society = society;
    }

    afficherPoste(postes) {
        this.society.updateDepartementDetail(postes);
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


bootstrap(Society);
