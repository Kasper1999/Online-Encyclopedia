import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogsPanelComponent } from './catalogs-panel.component';

describe('CatalogsPanelComponent', () => {
  let component: CatalogsPanelComponent;
  let fixture: ComponentFixture<CatalogsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
