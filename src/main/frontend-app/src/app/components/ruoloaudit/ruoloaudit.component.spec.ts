import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuoloauditComponent } from './ruoloaudit.component';

describe('RuoloauditComponent', () => {
  let component: RuoloauditComponent;
  let fixture: ComponentFixture<RuoloauditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuoloauditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuoloauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
