import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	template: '<h1>This is the User page (user {{id}})</h1>',
})
export class UserComponent {
	id: string;
	constructor(route: ActivatedRoute) {
		route.params.subscribe(params => this.id = params['id']);
	}
}