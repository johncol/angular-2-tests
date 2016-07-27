import { Component } from '@angular/core';
import { Hero } from './hero.model';
import { Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}