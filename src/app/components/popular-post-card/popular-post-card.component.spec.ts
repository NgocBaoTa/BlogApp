import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPostCardComponent } from './popular-post-card.component';

describe('PopularPostCardComponent', () => {
  let component: PopularPostCardComponent;
  let fixture: ComponentFixture<PopularPostCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularPostCardComponent]
    });
    fixture = TestBed.createComponent(PopularPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
