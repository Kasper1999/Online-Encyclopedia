import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAppearanceComponent } from './profile-appearance.component';

describe('ProfileAppearanceComponent', () => {
  let component: ProfileAppearanceComponent;
  let fixture: ComponentFixture<ProfileAppearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAppearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
