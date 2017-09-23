import { Component, OnInit } from '@angular/core';

import { ServiceModel } from '../service.model'

const services = [
  {"average_discount":55,"business_type":"hair salons","category_id":3,"created_at":"2012-10-30T01:27:28Z","id":29,"kind":1,"min_commission":10.0,"name":"Hair Coloring","position":10,"seo_name":"Hair Coloring","slug":"hair-coloring","status":"enabled","sub_category_id":1,"suggested_at":null,"updated_at":"2016-07-30T15:49:18Z"},
  {"average_discount":55,"business_type":"salons and spas","category_id":3,"created_at":"2012-09-23T15:15:22Z","id":24,"kind":1,"min_commission":3.0,"name":"Pedicure","position":13,"seo_name":"Pedicure","slug":"pedicure","status":"enabled","sub_category_id":4,"suggested_at":null,"updated_at":"2016-07-14T02:54:18Z"},
  {"average_discount":58,"business_type":"salons and spas","category_id":3,"created_at":"2013-02-14T16:26:39Z","id":50,"kind":1,"min_commission":5.0,"name":"Hair Styling","position":33,"seo_name":"Hair Styling","slug":"hair-styling","status":"enabled","sub_category_id":1,"suggested_at":null,"updated_at":"2016-12-08T15:57:32Z"},
  {"average_discount":62,"business_type":"massage therapists","category_id":3,"created_at":"2011-11-01T16:35:04Z","id":17,"kind":1,"min_commission":6.0,"name":"Massage","position":0,"seo_name":"Massage","slug":"massage","status":"enabled","sub_category_id":5,"suggested_at":null,"updated_at":"2016-08-01T20:42:40Z"},
  {"average_discount":49,"business_type":"hair salons","category_id":3,"created_at":"2012-06-21T23:02:33Z","id":20,"kind":1,"min_commission":3.0,"name":"Haircut","position":1,"seo_name":"Haircut","slug":"haircut","status":"enabled","sub_category_id":1,"suggested_at":null,"updated_at":"2016-11-30T21:54:39Z"},
  {"average_discount":0,"business_type":null,"category_id":9,"created_at":"2015-05-13T16:18:03Z","id":2649,"kind":2,"min_commission":null,"name":"Nail Services","position":2538,"seo_name":"Nail Services","slug":"nail-services","status":"enabled","sub_category_id":null,"suggested_at":null,"updated_at":"2015-07-16T00:15:45Z"},
  {"average_discount":50,"business_type":"hair salons","category_id":3,"created_at":"2014-02-17T03:50:21Z","id":87,"kind":1,"min_commission":11.0,"name":"Braiding","position":51,"seo_name":"Braiding","slug":"braiding","status":"enabled","sub_category_id":1,"suggested_at":null,"updated_at":"2016-07-23T17:09:06Z"},
  {"average_discount":55,"business_type":"salons and spas","category_id":3,"created_at":"2012-10-21T21:15:27Z","id":25,"kind":1,"min_commission":3.0,"name":"Waxing","position":3,"seo_name":"Waxing","slug":"waxing","status":"enabled","sub_category_id":3,"suggested_at":null,"updated_at":"2017-08-23T12:43:35Z"},
  {"average_discount":55,"business_type":"tanning specialists","category_id":3,"created_at":"2012-10-21T21:17:35Z","id":27,"kind":1,"min_commission":3.0,"name":"Tanning","position":30,"seo_name":"Tanning","slug":"tanning","status":"enabled","sub_category_id":5,"suggested_at":null,"updated_at":"2016-08-03T04:05:34Z"}
]

@Component({
  selector: 'service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services:Array<ServiceModel> = services

  constructor() { }

  ngOnInit() {
  }

}
