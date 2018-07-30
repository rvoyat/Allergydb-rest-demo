import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaruoloComponent } from './ricercaruolo.component';

describe('RicercaruoloComponent', () => {
  let component: RicercaruoloComponent;
  let fixture: ComponentFixture<RicercaruoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaruoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaruoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
