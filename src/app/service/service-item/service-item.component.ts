import { Component, OnInit, Input } from '@angular/core';

import { ServiceModel } from '../service.model'

@Component({
  selector: 'service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input()
  service:ServiceModel;

  constructor() { }

  ngOnInit() {
  }

}
