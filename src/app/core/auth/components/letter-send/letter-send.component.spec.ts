import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSendComponent } from './letter-send.component';

describe('LetterSendComponent', () => {
  let component: LetterSendComponent;
  let fixture: ComponentFixture<LetterSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LetterSendComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
