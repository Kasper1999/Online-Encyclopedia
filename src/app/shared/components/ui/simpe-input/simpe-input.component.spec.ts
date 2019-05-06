import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpeInputComponent } from './simpe-input.component';

describe('SimpeInputComponent', () => {
  let component: SimpeInputComponent;
  let fixture: ComponentFixture<SimpeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
