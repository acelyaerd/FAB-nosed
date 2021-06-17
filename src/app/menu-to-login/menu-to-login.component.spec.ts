import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToLoginComponent } from './menu-to-login.component';

describe('MenuToLoginComponent', () => {
  let component: MenuToLoginComponent;
  let fixture: ComponentFixture<MenuToLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuToLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuToLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
