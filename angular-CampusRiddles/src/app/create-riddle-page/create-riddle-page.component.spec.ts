import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRiddlePageComponent } from './create-riddle-page.component';

describe('CreateRiddlePageComponent', () => {
  let component: CreateRiddlePageComponent;
  let fixture: ComponentFixture<CreateRiddlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRiddlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRiddlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
