import { provideRouter, RouterConfig } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: RouterConfig = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', redirectTo: '/hero/:id/detail' },
    { path: 'hero/:id/detail', component: HeroDetailComponent },
];

export const APP_ROUTES_PROVIDER = provideRouter(routes);