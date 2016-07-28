import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent} from './heroes.component';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    providers: [HeroService],
    directives: [ROUTER_DIRECTIVES],
    precompile: [HeroDetailComponent, HeroesComponent, DashboardComponent],
    selector: 'tour-of-heroes',
    templateUrl : 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'Tour of Heroes';
}