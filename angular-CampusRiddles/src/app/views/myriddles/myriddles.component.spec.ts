import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyriddlesComponent } from './myriddles.component';

describe('MyriddlesComponent', () => {
  let component: MyriddlesComponent;
  let fixture: ComponentFixture<MyriddlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyriddlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyriddlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
