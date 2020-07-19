import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRiddlesPageComponent } from './my-riddles-page.component';

describe('MyRiddlesPageComponent', () => {
  let component: MyRiddlesPageComponent;
  let fixture: ComponentFixture<MyRiddlesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRiddlesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRiddlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
