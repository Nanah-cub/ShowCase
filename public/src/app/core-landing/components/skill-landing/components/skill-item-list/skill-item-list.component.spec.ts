import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillItemListComponent } from './skill-item-list.component';

describe('SkillItemListComponent', () => {
  let component: SkillItemListComponent;
  let fixture: ComponentFixture<SkillItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
