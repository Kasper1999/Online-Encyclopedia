import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoBrandsComponent } from './common-info-brands.component';

describe('CommonInfoBrandsComponent', () => {
  let component: CommonInfoBrandsComponent;
  let fixture: ComponentFixture<CommonInfoBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
