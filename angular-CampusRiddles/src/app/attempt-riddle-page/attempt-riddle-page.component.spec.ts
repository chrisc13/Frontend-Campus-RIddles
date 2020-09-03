import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptRiddlePageComponent } from './attempt-riddle-page.component';

describe('AttemptRiddlePageComponent', () => {
  let component: AttemptRiddlePageComponent;
  let fixture: ComponentFixture<AttemptRiddlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttemptRiddlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptRiddlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
