import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncProgArtComponent } from './func-prog-art.component';

describe('FuncProgArtComponent', () => {
  let component: FuncProgArtComponent;
  let fixture: ComponentFixture<FuncProgArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncProgArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncProgArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
