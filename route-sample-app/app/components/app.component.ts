import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './not-found.component';
import { LoginComponent } from './login.component';
import { ProtectedAreaComponent } from './protected-area.component';
import { NewsComponent } from './news.component';
import { LocalNewsComponent } from './local-news.component';
import { InternationalNewsComponent } from './international-news.component';

@Component({
	selector: 'router-sample-app',
	directives: [ROUTER_DIRECTIVES],
	precompile: [
		HomeComponent,
		UserComponent,
		AboutComponent,
		ContactComponent,
		PageNotFoundComponent,
		LoginComponent,
		ProtectedAreaComponent,
		NewsComponent,
		LocalNewsComponent,
		InternationalNewsComponent,
	],
	template: `
		<header>
			<h1 class="display-4">Router Sample App</h1>
		</header>
		<nav>
			<ul>
				<li><a [routerLink]="['/home']">Home</a></li>
				<li><a [routerLink]="['/about']">About</a></li>
				<li><a [routerLink]="['/contact']">Contact</a></li>
				<li><a [routerLink]="['/route-that-does-not-exist']">Route that does not exist</a></li>
				<li><a [routerLink]="['/user/' + user]" (click)="nextUser()">User {{user}}</a></li>
				<li><a [routerLink]="['/login']">Login</a></li>
				<li><a [routerLink]="['/protected-area']">Protected Area</a></li>
				<li><a [routerLink]="['/news']">News</a></li>
			</ul>
		</nav>
		<section class="main-content">
			<router-outlet></router-outlet>
		</section>
	`
})
export class AppComponent {
	user: number = 1;
	nextUser(): void { this.user++; }
}