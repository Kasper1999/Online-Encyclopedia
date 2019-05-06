import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSecurityInfoComponent } from './profile-security-info.component';

describe('ProfileSecurityInfoComponent', () => {
  let component: ProfileSecurityInfoComponent;
  let fixture: ComponentFixture<ProfileSecurityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSecurityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSecurityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
