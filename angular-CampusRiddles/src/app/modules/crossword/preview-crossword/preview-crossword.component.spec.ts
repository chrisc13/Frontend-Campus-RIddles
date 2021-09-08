import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCrosswordComponent } from './preview-crossword.component';

describe('PreviewCrosswordComponent', () => {
  let component: PreviewCrosswordComponent;
  let fixture: ComponentFixture<PreviewCrosswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCrosswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCrosswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
