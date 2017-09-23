import { Component, OnInit } from '@angular/core';

import { companyId } from '../../shared'
import { ServiceService } from '../service.service'
import { ServiceModel } from '../service.model'


@Component({
  selector: 'service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: ServiceModel[]

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService
      .get(companyId)
      .subscribe(s => this.services = s);
  }

}
