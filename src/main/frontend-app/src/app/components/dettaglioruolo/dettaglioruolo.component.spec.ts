import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioruoloComponent } from './dettaglioruolo.component';

describe('DettaglioruoloComponent', () => {
  let component: DettaglioruoloComponent;
  let fixture: ComponentFixture<DettaglioruoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioruoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioruoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
