import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { dataBaseUrl, ProxyService } from '../shared'

import { VariationModel } from './variation.model';

@Injectable()
// naming is hard :(
export class VariationService {
  constructor(private proxy: ProxyService) {}

    private getVariationUrl({variationId, serviceId, locationId}): string {
       return `${dataBaseUrl}${variationId}/variations.json?service_id=${serviceId}&location_id=${locationId}`;
    }

    private toServiceModelArray(input: object): VariationModel[]{
      return <VariationModel[]> input;
    }

    get({variationId, serviceId, locationId}): Observable<VariationModel[]> {
      return this.proxy
        .get(this.getVariationUrl({variationId, serviceId, locationId}))
        .map(this.toServiceModelArray)
    }
  }
