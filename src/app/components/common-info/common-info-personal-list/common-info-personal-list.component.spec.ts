import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoPersonalListComponent } from './common-info-personal-list.component';

describe('CommonInfoPersonalListComponent', () => {
  let component: CommonInfoPersonalListComponent;
  let fixture: ComponentFixture<CommonInfoPersonalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoPersonalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoPersonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
