import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctioncolumnComponent } from './functioncolumn.component';

describe('FunctioncolumnComponent', () => {
  let component: FunctioncolumnComponent;
  let fixture: ComponentFixture<FunctioncolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctioncolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctioncolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
