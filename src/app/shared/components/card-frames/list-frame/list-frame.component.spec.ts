import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFrameComponent } from './list-frame.component';

describe('ListFrameComponent', () => {
  let component: ListFrameComponent;
  let fixture: ComponentFixture<ListFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
