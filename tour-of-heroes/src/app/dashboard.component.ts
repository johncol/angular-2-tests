import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(private service: HeroService, private router: Router) {}

    ngOnInit(): void {
        this.service.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    goToDetails(hero: Hero): void {
        this.router.navigate(['/hero', hero.id, '/details']);
    }
}