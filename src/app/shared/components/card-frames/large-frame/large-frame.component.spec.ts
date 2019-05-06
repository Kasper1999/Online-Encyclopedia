import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeFrameComponent } from './large-frame.component';

describe('LargeFrameComponent', () => {
  let component: LargeFrameComponent;
  let fixture: ComponentFixture<LargeFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
