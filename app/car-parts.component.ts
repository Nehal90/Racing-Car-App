import { Component } from '@angular/core';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  stylesUrls: ['app/car-parts.component.css']

})
export class CarPartsComponent { 
	
	totalCarParts(){

		let sum = 0;

		for (let carPart of this.carParts){
			sum += carPart.inStock;
		}

		return sum;
	}

	carParts = [
	{
		"id" : 1,
		"name" : "Super Tires",
		"desc" : "These tires are world class!",
		"inStock" : 6,
		"price" : 82.49
	},
	{
		"id" : 2,
		"name" : "Reinforced Shocks",
		"desc" : "Shocks made from metal!",
		"inStock" : 0,
		"price" : 149.99
	},
	{
		"id" : 3,
		"name" : "Padded Seats",
		"desc" : "Softest seat ever!",
		"inStock" : 14,
		"price" : 69.99
	}];

}
