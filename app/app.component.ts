import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { CarPartsComponent} from './car-parts.component';
import { RacingDataService } from './racing-data.service';


@Component({
  	selector: 'my-app',
  	template: `
	  		<h1>{{title}}</h1>
	  		<car-parts></car-parts>	
	  		`,
	directives: [CarPartsComponent],
	providers: [RacingDataService, HTTP_PROVIDERS]  		
})
export class AppComponent { 
	
	title = 'Ultra Racing';

}
