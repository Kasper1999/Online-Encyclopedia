import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoStylesComponent } from './common-info-styles.component';

describe('CommonInfoStylesComponent', () => {
  let component: CommonInfoStylesComponent;
  let fixture: ComponentFixture<CommonInfoStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
