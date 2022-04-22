import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaratonComponent } from './maraton.component';

describe('MaratonComponent', () => {
  let component: MaratonComponent;
  let fixture: ComponentFixture<MaratonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaratonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaratonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
