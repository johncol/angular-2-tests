import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    moduleId: module.id,
    directives: [HeroDetailComponent],
    providers: [HeroService],
    selector: 'tour-of-heroes',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
    title: string = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private service: HeroService) {}

    ngOnInit(): void {
        this.service.getHeroesSlowly()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.heroes = []);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}