import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private service: HeroService, private router: Router) {}

    ngOnInit(): void {
        this.service.getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.heroes = []);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    goToDetails(hero: Hero) {
        this.router.navigate(['hero', hero.id]);
    }
}