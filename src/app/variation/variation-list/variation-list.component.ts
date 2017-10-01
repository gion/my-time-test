import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { companyId } from '../../shared'
import { VariationService } from '../variation.service'
import { VariationModel } from '../variation.model'

@Component({
  selector: 'variation-list',
  templateUrl: './variation-list.component.html',
  styleUrls: ['./variation-list.component.css']
})
export class VariationListComponent implements OnInit {

  shouldShowLoader = true;
  variations: VariationModel[];
  sub: any;

  constructor(
    private variationService: VariationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params
      .mergeMap(params => {
        // In a real app: dispatch action to load the details here.
        let { serviceId, locationId } = params;
        return this.variationService.get({serviceId, locationId, companyId});
      })
      .subscribe(v => {
        this.shouldShowLoader = false;
        this.variations = v;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
