import { Component } from '@angular/core';
import { CarPartsComponent} from './car-parts.component';

@Component({
  	selector: 'my-app',
  	template: `
	  		<h1>{{title}}</h1>
	  		<car-parts></car-parts>	
	  		`,
	directives: [CarPartsComponent]  		
})
export class AppComponent { 
	
	title = 'Ultra Racing';

}
