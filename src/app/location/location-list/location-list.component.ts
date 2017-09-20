import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../';

const locations = [{"id":39016,"company_id":40426,"street_address":"15 W Lomen Ave","street_address_2":null,"city":"Nome","state":"AK","zip_code":"99762","deleted_at":null,"lat":"64.49937349999999","lng":"-165.4157051","time_zone":"America/Nome","description":"Ring Door Code 1234 when you arrive.","phone_number":"(917) 628-5616"},{"id":39019,"company_id":40426,"street_address":"1 Warren Place","street_address_2":null,"city":"Nome","state":"AK","zip_code":"99762","deleted_at":null,"lat":"64.5006176","lng":"-165.4086424","time_zone":"America/Nome","description":null,"phone_number":"(917) 628-5616"},{"id":87937,"company_id":40426,"street_address":"6600 Topanga Canyon Blvd. Unit 1065A","street_address_2":null,"city":"Canoga Park","state":"CA","zip_code":"91303","deleted_at":null,"lat":"34.1901874","lng":"-118.6032891","time_zone":"America/Los_Angeles","description":null,"phone_number":"(818) 702-6300"},{"id":87938,"company_id":40426,"street_address":"12265 Ventura Blvd., Unit 203","street_address_2":null,"city":"Studio City","state":"CA","zip_code":"91604","deleted_at":null,"lat":"34.1435432","lng":"-118.4005746","time_zone":"America/Los_Angeles","description":null,"phone_number":"(818) 760-9000"}];

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})

export class LocationListComponent implements OnInit {
  locations:Array<LocationModel> = locations;

  constructor() {
  }

  ngOnInit() {
  }

}
