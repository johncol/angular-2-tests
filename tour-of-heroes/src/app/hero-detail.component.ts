import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    hero: Hero;
    sub: Subscription;

    constructor(private heroService: HeroService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            let id: number = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    goBack(): void {
        window.history.back();
    }

}