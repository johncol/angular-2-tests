import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	directives: [ROUTER_DIRECTIVES],
	template: `
		<h1>News Component</h1>
		<ul>
			<li><a [routerLink]="['local']">Local news</a></li>
			<li><a [routerLink]="['international']">International news</a></li>
		</ul>
		<router-outlet></router-outlet>
	`
})
export class NewsComponent {}