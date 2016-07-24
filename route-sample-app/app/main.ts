import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideForms, disableDeprecatedForms } from '@angular/forms';
import { AppComponent } from './components/app.component';
import { APP_ROUTE_PROVIDERS } from './routes';
import { AUTH_PROVIDERS } from './services/auth.service';
import { LoggedInGuard } from './services/logged-in-guard';

bootstrap(AppComponent, [
	disableDeprecatedForms(), 
	provideForms(), 
	APP_ROUTE_PROVIDERS,
	AUTH_PROVIDERS,
	LoggedInGuard,
]);