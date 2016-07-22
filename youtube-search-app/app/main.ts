import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { YoutubeAppComponent } from './components/youtube-app.component';
import { youtubeServiceInjectables } from './services/youtube.service';

bootstrap(YoutubeAppComponent, [HTTP_PROVIDERS, youtubeServiceInjectables]);