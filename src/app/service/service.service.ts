import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { dataBaseUrl, ProxyService } from '../shared'

import { ServiceModel } from './service.model';

@Injectable()
// naming is hard :(
// @TODO: rename this service
export class ServiceService {
  constructor(private proxy: ProxyService) {}

    private getLocationUrl(locationId): string {
       return `${dataBaseUrl}${locationId}/services.json`;
    }

    private toServiceModelArray(input: object): ServiceModel[]{
      return <ServiceModel[]> input;
    }

    get(id: string): Observable<ServiceModel[]> {
      return this.proxy
        .get(this.getLocationUrl(id))
        .map(this.toServiceModelArray)
    }
  }
