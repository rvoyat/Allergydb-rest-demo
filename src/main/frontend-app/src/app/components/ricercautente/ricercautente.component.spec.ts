import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercautenteComponent } from './ricercautente.component';

describe('RicercautenteComponent', () => {
  let component: RicercautenteComponent;
  let fixture: ComponentFixture<RicercautenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercautenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercautenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
