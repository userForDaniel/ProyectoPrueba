/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogearComponent } from './logear.component';

describe('LogearComponent', () => {
  let component: LogearComponent;
  let fixture: ComponentFixture<LogearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
