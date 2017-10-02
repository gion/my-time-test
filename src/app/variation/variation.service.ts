import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { dataBaseUrl, ProxyService } from '../shared'

import { VariationModel } from './variation.model';

@Injectable()
// naming is hard :(
export class VariationService {
  constructor(private proxy: ProxyService) {}

    private getVariationUrl({companyId, serviceId, locationId}): string {
       return `${dataBaseUrl}${companyId}/variations.json?service_id=${serviceId}&location_id=${locationId}`;
    }

    private toVariationModelArray(input: object): VariationModel[]{
      return <VariationModel[]> input;
    }

    get({companyId, serviceId, locationId}): Observable<VariationModel[]> {
      return this.proxy
        .get(this.getVariationUrl({companyId, serviceId, locationId}))
        .map(this.toVariationModelArray)
    }
  }
