import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoConfidentialityComponent } from './common-info-confidentiality.component';

describe('CommonInfoConfidentialityComponent', () => {
  let component: CommonInfoConfidentialityComponent;
  let fixture: ComponentFixture<CommonInfoConfidentialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoConfidentialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoConfidentialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
