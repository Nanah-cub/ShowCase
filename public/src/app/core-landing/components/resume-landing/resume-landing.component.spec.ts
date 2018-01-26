import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLandingComponent } from './resume-landing.component';

describe('ResumeLandingComponent', () => {
  let component: ResumeLandingComponent;
  let fixture: ComponentFixture<ResumeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
