import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoSidebarComponent } from './common-info-sidebar.component';

describe('CommonInfoSidebarComponent', () => {
  let component: CommonInfoSidebarComponent;
  let fixture: ComponentFixture<CommonInfoSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
