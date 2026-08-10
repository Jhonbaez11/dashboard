import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { app_routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(app_routes)
  ]
});
