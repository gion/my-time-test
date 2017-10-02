import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from "@angular/router/testing";

import { ServiceItemComponent } from './service-item.component';
import serviceMocks from '../mocks';

@Component({
  selector: 'service-test-wrapper',
  template: '<service-item [service]=service></service-item>'
})
class TestWrapperComponent {
  service = serviceMocks[0];
}

describe('ServiceItemComponent', () => {
  let component: TestWrapperComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        ServiceItemComponent,
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

  it('should have a link that ends with `the-right-service-id/variations`', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const href = compiled.querySelector('a').getAttribute('href');

    expect(href).toMatch(`${component.service.id}/variations$`);
  }));
});
