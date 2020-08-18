import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddleDetailPageComponent } from './riddle-detail-page.component';

describe('RiddleDetailPageComponent', () => {
  let component: RiddleDetailPageComponent;
  let fixture: ComponentFixture<RiddleDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiddleDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiddleDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
