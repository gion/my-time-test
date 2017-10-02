import { Component, OnInit, Input } from '@angular/core';

import { VariationModel } from '../variation.model'

@Component({
  selector: 'variation-item',
  templateUrl: './variation-item.component.html',
  styleUrls: ['./variation-item.component.css']
})
export class VariationItemComponent implements OnInit {

  @Input()
  variation: VariationModel;

  constructor() { }

  ngOnInit() {
  }

}
