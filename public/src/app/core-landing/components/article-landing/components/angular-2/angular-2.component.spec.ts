import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2Component } from './angular-2.component';

describe('Angular2Component', () => {
  let component: Angular2Component;
  let fixture: ComponentFixture<Angular2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
