import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLastEntriesComponent } from './blog-last-entries.component';

describe('BlogLastEntriesComponent', () => {
  let component: BlogLastEntriesComponent;
  let fixture: ComponentFixture<BlogLastEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogLastEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLastEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
