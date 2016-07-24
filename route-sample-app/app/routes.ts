import { RouterConfig, provideRouter } from '@angular/router';
import { LoggedInGuard } from './services/logged-in-guard';
import { HomeComponent } from './components/home.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { PageNotFoundComponent } from './components/not-found.component';
import { LoginComponent } from './components/login.component';
import { ProtectedAreaComponent } from './components/protected-area.component';
import { NewsComponent } from './components/news.component';
import { LocalNewsComponent } from './components/local-news.component';
import { InternationalNewsComponent } from './components/international-news.component';

export const routes: RouterConfig = [
	
	{ path: '', redirectTo: '/home', terminal: true },
	{ path: 'home', component: HomeComponent },

	{ path: 'local', component: HomeComponent },

	{ path: 'user/:id', component: UserComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },

	{ path: 'login', component: LoginComponent },
	{ path: 'protected-area', component: ProtectedAreaComponent, canActivate: [LoggedInGuard] },

	{ path: 'news', component: NewsComponent, children: [
		{ path: '', redirectTo: 'local', terminal: true },
		{ path: 'local', component: LocalNewsComponent },
		{ path: 'international', component: InternationalNewsComponent },
		{ path: '**', redirectTo: 'local' }
	]},

	{ path: 'page-not-found', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '/page-not-found' }

 ];

export const APP_ROUTE_PROVIDERS = provideRouter(routes);