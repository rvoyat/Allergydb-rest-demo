import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortablecolumnComponent } from './sortablecolumn.component';

describe('SortablecolumnComponent', () => {
  let component: SortablecolumnComponent;
  let fixture: ComponentFixture<SortablecolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortablecolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortablecolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
