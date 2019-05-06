import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoTermsComponent } from './common-info-terms.component';

describe('CommonInfoTermsComponent', () => {
  let component: CommonInfoTermsComponent;
  let fixture: ComponentFixture<CommonInfoTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
