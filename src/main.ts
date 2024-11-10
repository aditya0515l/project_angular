import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent,{
  providers:[
    importProvidersFrom(BrowserModule,RouterModule.forRoot(routes))
  ]
})
  .catch((err) => console.error(err));
