import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionAlpha01Component } from './version-alpha-0.0.1.component';

describe('VersionAlpha01Component', () => {
  let component: VersionAlpha01Component;
  let fixture: ComponentFixture<VersionAlpha01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionAlpha01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionAlpha01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
