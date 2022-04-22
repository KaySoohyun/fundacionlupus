import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaLastEntriesComponent } from './agenda-last-entries.component';

describe('AgendaLastEntriesComponent', () => {
  let component: AgendaLastEntriesComponent;
  let fixture: ComponentFixture<AgendaLastEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaLastEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaLastEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
