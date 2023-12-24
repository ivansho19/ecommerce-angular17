import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  /**
   * La funcion withComponentInputBinding() va a permitir que los parametros llegen como input a las paginas
   */
  providers: [
    provideRouter(routes, 
    withComponentInputBinding(), withPreloading(PreloadAllModules)), 
    provideClientHydration(),
    provideHttpClient()]
};
