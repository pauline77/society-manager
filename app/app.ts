/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor, Parent, forwardRef, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';

import {Employe} from 'class/employe';
import {Poste} from 'class/poste';
import {Departement} from 'class/departement';

import {StorageService} from 'services/storageService';
import {DatasService} from 'services/datasService';
import {CustomValidator} from 'validators/customValidator';


@Component({
    selector: 'app',
    appInjector: [DatasService]
})
@View({
    templateUrl: 'templates/app.html',
    directives: [
        NgFor,
        forwardRef(()=>Society),
        forwardRef(()=>DepartementDetail),
        forwardRef(()=>PosteDetail)
    ]
})
class App {
    society: Society;
    departementDetail: DepartementDetail;
    posteDetail: PosteDetail;

    datas: Array<Departement>;
    departementSelectionne: Number;
    posteSelectionne: Number;

    datasService: DatasService;

    constructor(datasService: DatasService) {
        this.datasService = datasService;
        this.datas = this.datasService.getDatas();
    }

    registerSociety(society: Society) {
        this.society = society;
    }

    registerDepartement(departementDetail: DepartementDetail) {
        this.departementDetail = departementDetail;
    }

    registerPoste(posteDetail: PosteDetail) {
        this.posteDetail = posteDetail;
    }

    updatePostes(index: Number) {
        if(typeof(index) == "number") {
        if(index < 0) {
            this.departementSelectionne = null;
            this.departementDetail.updatePostes([]);
            this.updateEmployes(-1);
            this.departementDetail.isShowPoste = false;
        }
        else {
            this.departementSelectionne = index;
            this.departementDetail.updatePostes(this.datas[Number(index)].postes);
            this.departementDetail.isShowPoste = true;
        }
        }
    }

    updateEmployes(index: Number) {
        if(index < 0) {
            this.posteSelectionne = null;
            this.posteDetail.isShowEmploye = false;
            this.posteDetail.updateEmployes([]);
        }
        else {
            this.posteSelectionne = index;
            this.posteDetail.isShowEmploye = true;
            this.posteDetail.updateEmployes(this.datas[Number(this.departementSelectionne)].postes[Number(index)].employes);
        }
    }

    addDepartement(dept: String) {
        this.datasService.addDepartement(dept);
    }

    deleteDepartement(position: Number) {
        this.datasService.deleteDepartement(Number(position));
        this.updatePostes(-1);
    }

    addPoste(poste: String) {
        this.datasService.addPoste(Number(this.departementSelectionne), poste);
    }

    deletePoste(position: Number) {
        this.datasService.deletePoste(Number(this.departementSelectionne), Number(position));
        this.updateEmployes(-1);
    }
    addEmploye(prenom: String, nom: String) {
        this.datasService.addEmploye(this.departementSelectionne, this.posteSelectionne, prenom, nom);

    }
    deleteEmploye(position: Number) {
        this.datasService.deleteEmploye(this.departementSelectionne, this.posteSelectionne,position);
    }
}

@Component({
    selector: 'society',
    appInjector: [CustomValidator]
})
@View({
    templateUrl: 'templates/society.html',
    directives: [
        NgFor,
        formDirectives
    ]
})
class Society {
    app: App;
	departements: Array<Departement>;

    departementForm:ControlGroup;

	constructor(@Parent() app: App, customValidator: CustomValidator) {
        this.app = app;
        this.app.registerSociety(this);
		this.departements = this.app.datas;

        this.departementForm = new ControlGroup({
            departement: new Control("", customValidator.departementExist)
        });
	}

    afficherPostes(index: Number) {
        this.app.updatePostes(index);
        this.app.updateEmployes(-1);
    }

    addDepartement(e) {
        e.preventDefault();
        if(this.departementForm.valid) { // return true or false, depending on the form state
            this.app.addDepartement(this.departementForm.value.departement);
        } else {
            console.error("invalid form", this.departementForm);
        }
    }

    deleteDepartement(position: Number) {
        this.app.deleteDepartement(position);
    }
}

@Component({
    selector: 'departement',
    appInjector: [CustomValidator]
})
@View({
    templateUrl: 'templates/departement.html',
    directives: [NgFor,formDirectives]
})
class DepartementDetail {
    app: App;
    postes: Array<Poste>;
    isShowPoste: Boolean = false;
    posteForm:ControlGroup;

    constructor(@Parent() app: App){
        this.app = app;
        this.app.registerDepartement(this);

        this.posteForm = new ControlGroup({
            poste: new Control("", Validators.required)
        });
    }

    addPoste(e) {
        e.preventDefault();
        if(this.posteForm.valid) { // return true or false, depending on the form state
            this.app.addPoste(this.posteForm.value.poste);
        } else {
            console.error("invalid form", this.posteForm);
        }
    }

    deletePoste(position: Number) {
        this.app.deletePoste(position);
    }

    updatePostes(postes: Array<Poste>) {
        this.postes = postes;
    }

    afficherEmployes(index: Number) {
        this.app.updateEmployes(index);
    }
}


@Component({
    selector: 'poste',
    properties: ['poste'],
    appInjector: [CustomValidator]
})
@View({
    templateUrl: 'templates/poste.html',
    directives: [NgFor,formDirectives]
})
class PosteDetail
{
    employeForm:ControlGroup;

    employes: Array<Employe>;
    app: App;
    isShowEmploye: Boolean = false;

    constructor(@Parent() app: App){
        this.app = app;
        this.app.registerPoste(this);

        this.employeForm = new ControlGroup({
            prenom: new Control("", Validators.required),
            nom: new Control("", Validators.required)
        });
    }

    updateEmployes(employes: Array<Employe>) {
        this.employes = employes;
    }

    deleteEmploye(position: Number) {
        this.app.deleteEmploye(position);
    }

    addEmploye(e) {
        e.preventDefault();
        if(this.employeForm.valid) { // return true or false, depending on the form state
            this.app.addEmploye(this.employeForm.value.nom, this.employeForm.value.prenom);

        } else {
            console.error("invalid form", this.employeForm);
        }
    }
}



bootstrap(App);
