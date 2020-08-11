import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySubmitPageComponent } from './community-submit-page.component';

describe('CommunitySubmitPageComponent', () => {
  let component: CommunitySubmitPageComponent;
  let fixture: ComponentFixture<CommunitySubmitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitySubmitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitySubmitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
