import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// Imported libraries for angular material and font awesome icons
import 'hammerjs';
import {faChevronLeft, faChevronRight} from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';

fontawesome.library.add(faChevronLeft, faChevronRight);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
