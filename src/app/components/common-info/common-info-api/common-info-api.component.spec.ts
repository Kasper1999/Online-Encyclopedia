import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoApiComponent } from './common-info-api.component';

describe('CommonInfoApiComponent', () => {
  let component: CommonInfoApiComponent;
  let fixture: ComponentFixture<CommonInfoApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
