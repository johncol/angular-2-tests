import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { YoutubeSearchComponent } from './components/youtube-search.component';
import { youtubeServiceInjectables } from './services/youtube.service';

bootstrap(YoutubeSearchComponent, [HTTP_PROVIDERS, youtubeServiceInjectables]);