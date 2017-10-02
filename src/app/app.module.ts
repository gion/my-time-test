import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import {
  MdProgressSpinnerModule,
  MdButtonModule,
  MdListModule,
  MatCardModule
 } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
import {
  VariationService,
  VariationListComponent,
  VariationItemComponent } from './variation';

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
  {
    path: 'locations/:locationId/services/:serviceId/variations',
    component: VariationListComponent,
    data: { title: 'Select a variation!' }
  },
  // { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NothingComponent,
    LocationListComponent,
    LocationItemComponent,
    ServiceListComponent,
    ServiceItemComponent,
    VariationListComponent,
    VariationItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    BrowserAnimationsModule,
    MdProgressSpinnerModule,
    MdButtonModule,
    MdListModule,
    MatCardModule
  ],
  exports: [],
  providers: [
    ProxyService,
    LocationService,
    ServiceService,
    VariationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
