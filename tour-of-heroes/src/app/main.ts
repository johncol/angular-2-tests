import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { APP_ROUTES_PROVIDER } from './app.routes';

bootstrap(AppComponent, [
    APP_ROUTES_PROVIDER
])
.then(success => console.log(`Bootstrap success`))
.catch(error => console.log(error));