import { CARPARTS } from './mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RacingDataService{

	constructor(private http: Http){ }
	
	getCarParts(){
		return this.http.get('app/car-parts-data.json')
						.map(response => <CarPart[]>response.json().data);
	}

}