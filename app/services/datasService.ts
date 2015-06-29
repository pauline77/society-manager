import {Departement} from 'class/departement';
import {Poste} from 'class/poste';
import {Employe} from 'class/employe';

export class DatasService {
	datas: Array<Departement>;

	constructor() {
		// this.datas = [];
		this.datas = [
			new Departement('Département 1', [
				new Poste('Poste 1', [
					new Employe('nom1', 'prenom', new Date(2000, 5, 31), 'Homme'),
					new Employe('nom12', 'prenom', new Date(1980, 7, 21), 'Femme')
				]),
				new Poste('Poste 2'),
				new Poste('Poste 3', [
					new Employe('nom31', 'prenom', new Date(2000, 5, 31), 'Homme')
				])
			]),
			new Departement('Département 2', [
				new Poste('Poste 4'),
				new Poste('Poste 5', [
					new Employe('nom51', 'prenom', new Date(2000, 5, 31), 'Homme'),
					new Employe('nom52', 'prenom', new Date(1980, 7, 21), 'Femme')
				]),
				new Poste('Poste 6', [
					new Employe('nom61', 'prenom', new Date(2000, 5, 31), 'Homme'),
					new Employe('nom62', 'prenom', new Date(1980, 7, 21), 'Femme')
				])
			]),
			new Departement('Département 3', [
				new Poste('Poste 7', [
					new Employe('nom71', 'prenom', new Date(2000, 5, 31), 'Homme'),
					new Employe('nom72', 'prenom', new Date(1980, 7, 21), 'Femme'),
					new Employe('nom73', 'prenom', new Date(1980, 7, 21), 'Femme')
				]),
				new Poste('Poste 8', [
					new Employe('nom81', 'prenom', new Date(2000, 5, 31), 'Homme'),
					new Employe('nom82', 'prenom', new Date(1980, 7, 21), 'Femme')
				]),
				new Poste('Poste 9', [
					new Employe('nom91', 'prenom', new Date(2000, 5, 31), 'Homme'),
					new Employe('nom92', 'prenom', new Date(1980, 7, 21), 'Femme')
				])
			])
		];
	}

	addDepartement(libelle: String) {
		this.datas.push(new Departement(libelle));
	}

	deleteDepartement(position: number) {
		this.datas.splice(position, 1);
	}

	getDatas() {
		return this.datas;
	}
}
