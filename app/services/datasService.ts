import {Departement} from 'class/departement';

export class DatasService {
	private datas: Array<Departement>;

	constructor() {
		this.datas = [
			new Departement('Département 1'),
			new Departement('Département 2'),
			new Departement('Département 3'),
		];
	}

	getDatas() {
		return this.datas;
	}
}