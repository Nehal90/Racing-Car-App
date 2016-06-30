import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  				<h2>{{carPart.name}}<h2>
  				<p>{{carPart.desc}}<p>
  				<p>{{carPart.inStock}}<p>
  			`
})
export class AppComponent { 
	title = 'Ultra Racing';

	carPart = {
		"id" : 1,
		"name" : "Super Tires",
		"desc" : "These tires are world class!",
		"inStock" : 5
	};
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/