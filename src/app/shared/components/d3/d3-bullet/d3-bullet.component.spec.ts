import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3BulletComponent } from './d3-bullet.component';

describe('D3BulletComponent', () => {
  let component: D3BulletComponent;
  let fixture: ComponentFixture<D3BulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3BulletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3BulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
