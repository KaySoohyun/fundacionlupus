/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FundacionComponent } from './fundacion.component';

describe('FundacionComponent', () => {
  let component: FundacionComponent;
  let fixture: ComponentFixture<FundacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
