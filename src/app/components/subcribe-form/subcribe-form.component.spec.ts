import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcribeFormComponent } from './subcribe-form.component';

describe('SubcribeFormComponent', () => {
  let component: SubcribeFormComponent;
  let fixture: ComponentFixture<SubcribeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcribeFormComponent]
    });
    fixture = TestBed.createComponent(SubcribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
