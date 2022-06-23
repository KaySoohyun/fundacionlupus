import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LupusOamComponent } from './lupus-oam.component';

describe('LupusOamComponent', () => {
  let component: LupusOamComponent;
  let fixture: ComponentFixture<LupusOamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LupusOamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LupusOamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
