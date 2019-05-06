import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoAboutComponent } from './common-info-about.component';

describe('CommonInfoAboutComponent', () => {
  let component: CommonInfoAboutComponent;
  let fixture: ComponentFixture<CommonInfoAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
