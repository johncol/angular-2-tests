import { Hero } from './hero.model';
import { HEROES_LIST } from './heroes.mock';

export class HeroService {

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES_LIST);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => 
            setTimeout(() => resolve(HEROES_LIST), 1000)
        );
    }

}