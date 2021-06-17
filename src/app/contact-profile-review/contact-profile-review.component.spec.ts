import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProfileReviewComponent } from './contact-profile-review.component';

describe('ContactProfileReviewComponent', () => {
  let component: ContactProfileReviewComponent;
  let fixture: ComponentFixture<ContactProfileReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactProfileReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactProfileReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
