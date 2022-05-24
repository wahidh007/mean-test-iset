import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('nom should be Salah', () => {
    expect(component.nom).toEqual('Salah');
  });

  it('list etudiants should be more than 1', () => {
    expect(component.etudiants.length).toBeGreaterThan(1);
  });

  it('list etudiants[0].nom should be Salah', () => {
    expect(component.etudiants[0].nom).toBe("Salah");
  });
});
