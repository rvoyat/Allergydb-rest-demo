import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercagruppoComponent } from './ricercagruppo.component';

describe('RicercagruppoComponent', () => {
  let component: RicercagruppoComponent;
  let fixture: ComponentFixture<RicercagruppoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercagruppoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercagruppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
