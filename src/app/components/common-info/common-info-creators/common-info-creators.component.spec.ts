import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoCreatorsComponent } from './common-info-creators.component';

describe('CommonInfoCreatorsComponent', () => {
  let component: CommonInfoCreatorsComponent;
  let fixture: ComponentFixture<CommonInfoCreatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoCreatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
