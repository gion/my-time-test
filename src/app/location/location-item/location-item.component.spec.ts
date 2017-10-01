import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from "@angular/router/testing";

import { LocationItemComponent } from './location-item.component';
import locationMocks from '../mocks';

@Component({
  selector: 'test-wrapper',
  template: '<location-item [location]=location></location-item>',
})
class TestWrapperComponent {
  location = locationMocks[0];
}

describe('LocationItemComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        LocationItemComponent,
        TestWrapperComponent
      ]
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

  it('should have a link to `/locations/the-location-id/services`', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const href = compiled.querySelector('a').getAttribute('href');

    expect(href).toEqual(`/locations/${component.location.id}/services`);
  }));
});
