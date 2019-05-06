import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoAgreementComponent } from './common-info-agreement.component';

describe('CommonInfoAgreementComponent', () => {
  let component: CommonInfoAgreementComponent;
  let fixture: ComponentFixture<CommonInfoAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
