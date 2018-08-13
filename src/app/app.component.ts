import { Component } from '@angular/core';


@Component({
	selector: 'app-root', 
	template: ` <div styl="padding:5px">
		   <ul class="nav nav-tabs">
			<li> <a routerLink="home"> Home </a> </li>
			<li> <a routerLink="addis-map"> addis-map </a> </li>
			</ul>
			<router-outlet></router-outlet>
			</div>`
})

export class AppComponent {
	

}