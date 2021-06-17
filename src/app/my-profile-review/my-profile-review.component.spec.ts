import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileReviewComponent } from './my-profile-review.component';

describe('MyProfileReviewComponent', () => {
  let component: MyProfileReviewComponent;
  let fixture: ComponentFixture<MyProfileReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
