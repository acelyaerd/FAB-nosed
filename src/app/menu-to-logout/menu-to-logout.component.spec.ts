import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToLogoutComponent } from './menu-to-logout.component';

describe('MenuToLogoutComponent', () => {
  let component: MenuToLogoutComponent;
  let fixture: ComponentFixture<MenuToLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuToLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuToLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
