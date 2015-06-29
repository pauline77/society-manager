import {Departement} from 'class/departement';

export class DatasService {
	datas: Array<Departement>;

	constructor() {
		this.datas = [];
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
