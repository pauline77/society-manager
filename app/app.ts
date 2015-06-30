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
        if(index < 0) {
            this.departementSelectionne = null;
            this.departementDetail.updatePostes(new Array<Poste>);
            this.updateEmployes(-1);
            this.departementDetail.hasPost = false;
        }
        else {
            this.departementSelectionne = index;
            this.departementDetail.updatePostes(this.datas[index].postes);
            this.departementDetail.hasPost = true;
        }
    }

    updateEmployes(index: Number) {
        if(index < 0) {
            this.posteSelectionne = null;
            this.posteDetail.updateEmployes(new Array<Employe>);
            this.posteDetail.hasPost = false;
        }
        else {
            this.posteSelectionne = index;
            this.posteDetail.updateEmployes(this.datas[this.departementSelectionne].postes[index].employes);
            this.posteDetail.hasPost = true;
        }
    }

    addDepartement(dept: String) {
        this.datasService.addDepartement(dept);
    }

    deleteDepartement(position: Number) {
        this.datasService.deleteDepartement(position);
        this.updatePostes(-1);
    }

    addPoste(poste: String) {
        this.datasService.addPoste(this.departementSelectionne, poste);
    }

    deletePoste(position: Number) {
        this.datasService.deletePoste(this.departementSelectionne, position);
        this.updateEmployes(-1);
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

    // updateDepartementDetail(postes) {
    //     this.departementDetail.updatePostes(postes);
    // }

    // registerDepartementDetail(departementDetail: DepartementDetail){
    //     this.departementDetail = departementDetail;
    // }
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
    hasPost: Boolean = false;
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
    properties: ['poste']
})
@View({
    templateUrl: 'templates/poste.html',
    directives: [NgFor]
})
class PosteDetail
{
    employes: Array<Employe>;
    app: App;
    hasEmployes: Boolean = false;

    constructor(@Parent() app: App){
        this.app = app;
        this.app.registerPoste(this);
    }

    updateEmployes(employes: Array<Employe>) {
        this.employes = employes;
    }
}


bootstrap(App);
