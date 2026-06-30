import { vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxSideMenuComponent } from './apx-side-menu';
import { provideRouter } from '@angular/router';

describe('ApxSideMenuComponent', () => {                       //testingr del paquete
  let component: ApxSideMenuComponent;
  let fixture: ComponentFixture<ApxSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApxSideMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ApxSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call singIn when button is clicked', () => {
    vi.spyOn(component.signIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.signIn.emit).toHaveBeenCalled();
  });

  it('should call signOut when button is clicked', () => {
    vi.spyOn(component.signOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.signOut.emit).toHaveBeenCalled();
  });
});
