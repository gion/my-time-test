import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationListComponent } from './location-list.component';
import { LocationService } from '../location.service';
import locationMocks from '../mocks';

const LocationServiceMock = {
  get: () => {
    return {
      subscribe: () => locationMocks
    }
  }
}

@Component({
  selector: 'test-wrapper',
  template: '<location-list></location-list>',
})
class TestWrapperComponent {
  locations = locationMocks;
}

describe('LocationListComponent', () => {
  let component: LocationListComponent;
  let fixture: ComponentFixture<LocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LocationListComponent,
        TestWrapperComponent
      ],
      providers: [
        { provide: LocationService, useValue: LocationServiceMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
