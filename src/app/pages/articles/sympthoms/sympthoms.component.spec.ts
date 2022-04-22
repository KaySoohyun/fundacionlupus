import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SympthomsComponent } from './sympthoms.component';

describe('SympthomsComponent', () => {
  let component: SympthomsComponent;
  let fixture: ComponentFixture<SympthomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SympthomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SympthomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
