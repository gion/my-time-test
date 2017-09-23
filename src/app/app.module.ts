import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ProxyService } from './shared';

import { AppComponent } from './app.component';
import { NothingComponent } from './nothing';
import {
  LocationService,
  LocationListComponent,
  LocationItemComponent } from './location';
import {
  ServiceService,
  ServiceListComponent,
  ServiceItemComponent } from './service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/nothing',
    pathMatch: 'full'
  },
  {
    path: 'nothing',
    component: NothingComponent
  },
  {
    path: 'locations',
    component: LocationListComponent,
    data: { title: 'Select a location!' }
  },
  {
    path: 'locations/:locationId/services',
    component: ServiceListComponent,
    data: { title: 'Select a service!' }
  },
  // {
  //   path: 'locations/:locationId/services/:serviceId',
  //   component: AppComponent,
  //   data: { title: 'Select a location!' }
  // },
  // { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NothingComponent,
    LocationListComponent,
    LocationItemComponent,
    ServiceListComponent,
    ServiceItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule
  ],
  providers: [
    ProxyService,
    LocationService,
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
