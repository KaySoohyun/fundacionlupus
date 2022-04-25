import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniosItemComponent } from './testimonios-item.component';

describe('TestimoniosItemComponent', () => {
  let component: TestimoniosItemComponent;
  let fixture: ComponentFixture<TestimoniosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimoniosItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
