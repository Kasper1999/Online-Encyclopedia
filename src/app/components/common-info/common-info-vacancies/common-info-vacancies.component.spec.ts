import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoVacanciesComponent } from './common-info-vacancies.component';

describe('CommonInfoVacanciesComponent', () => {
  let component: CommonInfoVacanciesComponent;
  let fixture: ComponentFixture<CommonInfoVacanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoVacanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
