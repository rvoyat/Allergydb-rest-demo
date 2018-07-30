import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteformComponent } from './utenteform.component';

describe('UtenteformComponent', () => {
  let component: UtenteformComponent;
  let fixture: ComponentFixture<UtenteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtenteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtenteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
