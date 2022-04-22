import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSaludComponent } from './info-salud.component';

describe('InfoSaludComponent', () => {
  let component: InfoSaludComponent;
  let fixture: ComponentFixture<InfoSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSaludComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
