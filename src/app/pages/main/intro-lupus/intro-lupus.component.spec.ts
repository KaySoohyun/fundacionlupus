import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroLupusComponent } from './intro-lupus.component';

describe('IntroLupusComponent', () => {
  let component: IntroLupusComponent;
  let fixture: ComponentFixture<IntroLupusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroLupusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroLupusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
