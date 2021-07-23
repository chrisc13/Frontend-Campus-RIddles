import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJigsawComponent } from './create-jigsaw.component';

describe('CreateJigsawComponent', () => {
  let component: CreateJigsawComponent;
  let fixture: ComponentFixture<CreateJigsawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJigsawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJigsawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
