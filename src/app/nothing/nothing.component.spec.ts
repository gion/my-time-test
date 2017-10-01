import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from "@angular/router/testing";

import { NothingComponent } from './nothing.component';

describe('NothingComponent', () => {
  let component: NothingComponent;
  let fixture: ComponentFixture<NothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ NothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to `/locations`', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const href = compiled.querySelector('a').getAttribute('href');
    expect(href).toEqual('/locations');
  }));
});
