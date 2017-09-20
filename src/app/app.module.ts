import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NothingComponent } from './nothing';
import { LocationListComponent } from './location';

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
  // {
  //   path: 'locations/:id',
  //   component: AppComponent,
  //   data: { title: 'Select a location!' }
  // },
  // {
  //   path: 'locations',
  //   component: AppComponent,
  //   data: { title: 'Select a location!' }
  // },
  // { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NothingComponent,
    LocationListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
