import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuoloformComponent } from './ruoloform.component';

describe('RuoloformComponent', () => {
  let component: RuoloformComponent;
  let fixture: ComponentFixture<RuoloformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuoloformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuoloformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
