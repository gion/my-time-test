import { Component, OnInit, Input } from '@angular/core';

import { LocationModel } from '../location.model'

@Component({
  selector: 'location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']
})
export class LocationItemComponent implements OnInit {

  @Input()
  location:LocationModel

  constructor() { }

  ngOnInit() {
    console.log(this.location)
  }

}
