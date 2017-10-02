import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ServiceListComponent } from './service-list.component';
import { ServiceService } from '../service.service';
import serviceMocks from '../mocks';

const ServiceServiceMock = {
  get: () => {
    return {
      subscribe: () => serviceMocks
    }
  }
}

@Component({
  selector: 'test-wrapper',
  template: '<service-list></service-list>',
})
class TestWrapperComponent {
  services = serviceMocks;
}

describe('ServiceListComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ServiceListComponent,
        TestWrapperComponent
      ],
      providers: [
        { provide: ServiceService, useValue: ServiceServiceMock }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
