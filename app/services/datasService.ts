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
					new Employe('nom1', 'prenom'),
					new Employe('nom12', 'prenom')
				]),
				new Poste('Poste 2'),
				new Poste('Poste 3', [
					new Employe('nom31', 'prenom')
				])
			]),
			new Departement('Département 2', [
				new Poste('Poste 4'),
				new Poste('Poste 5', [
					new Employe('nom51', 'prenom'),
					new Employe('nom52', 'prenom')
				]),
				new Poste('Poste 6', [
					new Employe('nom61', 'prenom'),
					new Employe('nom62', 'prenom')
				])
			]),
			new Departement('Département 3', [
				new Poste('Poste 7', [
					new Employe('nom71', 'prenom'),
					new Employe('nom72', 'prenom'),
					new Employe('nom73', 'prenom')
				]),
				new Poste('Poste 8', [
					new Employe('nom81', 'prenom'),
					new Employe('nom82', 'prenom')
				]),
				new Poste('Poste 9', [
					new Employe('nom91', 'prenom'),
					new Employe('nom92', 'prenom')
				])
			])
		];
	}

	addDepartement(libelle: String) {
		this.datas.push(new Departement(libelle));
	}

	deleteDepartement(positionDept: number) {
		this.datas.splice(positionDept, 1);
	}

	addPoste(position: number, libelle: String) {
		this.datas[position].postes.push(new Poste(libelle));
	}

	deletePoste(positionDept: number, positionPoste: number) {
		this.datas[positionDept].postes.splice(positionPoste, 1);
	}

	addEmploye(positionDept: number, positionPoste: number, prenom: String, nom: String) {
		this.datas[positionDept].postes[positionPoste].employes.push(new Employe(prenom, nom));
	}
	deleteEmploye(posDep: number, posPoste: number, posEmploye: number) {
		this.datas[posDep].postes[posPoste].employes.splice(posEmploye, 1);
	}

	getDatas() {
		return this.datas;
	}
}
