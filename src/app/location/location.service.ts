import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { dataBaseUrl, ProxyService } from '../shared'

import { LocationModel } from './location.model';

@Injectable()
export class LocationService {

  constructor(private proxy: ProxyService) {}

  private getLocationUrl(locationId): string {
     return `${dataBaseUrl}${locationId}/locations.json`;
  }

  private toLocationModelArray(input: object): LocationModel[]{
    return <LocationModel[]> input;
  }

  get(id: string): Observable<LocationModel[]> {
    return this.proxy
      .get(this.getLocationUrl(id))
      .map(this.toLocationModelArray)
  }
}
