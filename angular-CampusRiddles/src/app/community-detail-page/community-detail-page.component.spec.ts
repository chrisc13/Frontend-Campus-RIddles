import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDetailPageComponent } from './community-detail-page.component';

describe('CommunityDetailPageComponent', () => {
  let component: CommunityDetailPageComponent;
  let fixture: ComponentFixture<CommunityDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
