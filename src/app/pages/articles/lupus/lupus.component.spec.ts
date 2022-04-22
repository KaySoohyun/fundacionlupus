import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LupusComponent } from './lupus.component';

describe('LupusComponent', () => {
  let component: LupusComponent;
  let fixture: ComponentFixture<LupusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LupusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LupusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
