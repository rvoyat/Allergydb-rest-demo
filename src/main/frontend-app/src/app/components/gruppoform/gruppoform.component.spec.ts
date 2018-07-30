import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruppoformComponent } from './gruppoform.component';

describe('GruppoformComponent', () => {
  let component: GruppoformComponent;
  let fixture: ComponentFixture<GruppoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruppoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruppoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
