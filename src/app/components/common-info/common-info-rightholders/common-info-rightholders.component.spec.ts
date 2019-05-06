import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoRightholdersComponent } from './common-info-rightholders.component';

describe('CommonInfoRightholdersComponent', () => {
  let component: CommonInfoRightholdersComponent;
  let fixture: ComponentFixture<CommonInfoRightholdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoRightholdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoRightholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
