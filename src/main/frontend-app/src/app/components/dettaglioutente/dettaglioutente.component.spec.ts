import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioutenteComponent } from './dettaglioutente.component';

describe('DettaglioutenteComponent', () => {
  let component: DettaglioutenteComponent;
  let fixture: ComponentFixture<DettaglioutenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioutenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioutenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
